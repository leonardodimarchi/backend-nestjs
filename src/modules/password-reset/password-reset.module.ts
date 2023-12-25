import { Module } from '@nestjs/common';
import { ExecutePasswordResetUseCase } from './domain/usecases/execute/execute-password-reset.usecase';
import { RequestPasswordResetUseCase } from './domain/usecases/request/request-password-reset.usecase';
import { ValidatePasswordResetUseCase } from './domain/usecases/validate/validate-password-reset.usecase';
import { PasswordResetDatabaseModule } from './infra/database/password-reset-database.module';
import { PasswordResetController } from './presenter/controllers/password-reset.controller';
import { UserDatabaseModule } from '@modules/user/infra/database/user-database.module';

@Module({
  imports: [PasswordResetDatabaseModule, UserDatabaseModule],
  controllers: [PasswordResetController],
  providers: [
    RequestPasswordResetUseCase,
    ValidatePasswordResetUseCase,
    ExecutePasswordResetUseCase,
  ],
})
export class PasswordResetModule {}
