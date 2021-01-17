import { HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthModule } from 'auth';
import { ApiClientModule } from 'common';
import { UsersModule } from 'common/users/users.module';
import { FeatureClientService } from './feature-client.service';
import { FeatureService } from './feature.service';


describe('FeatureService', () => {
  let featureService: FeatureService;
  let featureClientService: FeatureClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AuthModule,
        ApiClientModule,
        UsersModule,
        HttpModule,
        ConfigModule,
      ],
      providers: [FeatureService, FeatureClientService],
    }).compile();

    featureService = module.get<FeatureService>(FeatureService);
    featureClientService = module.get<FeatureClientService>(
      FeatureClientService,
    );
  });

  it('should be defined', () => {
    expect(featureService).toBeDefined();
  });

  describe('find', () => {
    it('should return object', async () => {
      const result = { a: '1234' };

      jest
        .spyOn(featureClientService, 'getSomething')
        .mockImplementation(async () => result);

      expect(await featureService.find()).toBe(result);
    });
  });

});
