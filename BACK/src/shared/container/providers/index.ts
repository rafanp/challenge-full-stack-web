import { container } from 'tsyringe';

import { IJWTProvider } from './JWTProvider/model/IJWTProvider';
import { JsonWebTokenProvider } from './JWTProvider/implementations/JsonWebTokenProvider';

const registeredProviders = {
  JWTProvider: 'JWTProvider',
} as const;

function registerProviders() {
  container.registerSingleton<IJWTProvider>(
    registeredProviders.JWTProvider,
    JsonWebTokenProvider,
  );
}

export * from './JWTProvider/implementations/JsonWebTokenProvider';
export * from './JWTProvider/model/IJWTProvider';

export { registeredProviders, registerProviders };
