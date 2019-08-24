import { EduModule } from './edu.module';

describe('EduModule', () => {
  let eduModule: EduModule;

  beforeEach(() => {
    eduModule = new EduModule();
  });

  it('should create an instance', () => {
    expect(eduModule).toBeTruthy();
  });
});
