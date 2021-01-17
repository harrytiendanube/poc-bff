export function ApplyTokenApi<T>() {
  return function(target: new (...params: any[]) => T) {
    for (const key of Object.getOwnPropertyNames(target.prototype)) {
      // maybe blacklist methods here
      let descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
      if (descriptor) {
        descriptor = applyTokenInMethod()(key, descriptor);
        Object.defineProperty(target.prototype, key, descriptor);
      }
    }
  };
}

function applyTokenInMethod(): (
  methodName: string,
  descriptor: PropertyDescriptor,
) => PropertyDescriptor {
  return (
    methodName: string,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor => {
    const method = descriptor.value;
    descriptor.value = function(...args: any[]) {
      if (typeof this.setToken === 'function') {
        this.setToken();
      }

      return method.apply(this, args);
    };
    return descriptor;
  };
}
