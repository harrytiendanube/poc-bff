import {
  HttpService,
  Logger,
  Module,
  OnModuleInit,
  HttpModule as BaseHttpModule,
} from '@nestjs/common';

@Module({
  imports: [BaseHttpModule],
  exports: [BaseHttpModule],
})
export class HttpModule implements OnModuleInit {
  constructor(private readonly httpService: HttpService) {}

  public onModuleInit(): any {
    const logger = new Logger('Axios');

    const axios = this.httpService.axiosRef;
    axios.interceptors.request.use(config => {
      config['metadata'] = { ...config['metadata'], startDate: new Date() };
      return config;
    });
    axios.interceptors.response.use(
      response => {
        const { config } = response;
        config['metadata'] = { ...config['metadata'], endDate: new Date() };
        const duration =
          config['metadata'].endDate.getTime() -
          config['metadata'].startDate.getTime();

        logger.log(
          `${config.method.toUpperCase()}  ${config.baseURL ?? ''}${
            config.url
          } ${duration}ms`,
        );
        return response;
      },
      e => {
        logger.error(e);
        return Promise.reject(e);
      },
    );
  }
}
