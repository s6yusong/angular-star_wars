import { TestBed } from '@angular/core/testing';

import { UtilsService } from '../app/services/utils.service';

describe('UserService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get correct class to show vehicle image', () => {
    expect(service.getAvatarClass('Luke Skywalker')).toEqual('luke-skywalker-avatar');
    expect(service.getAvatarClass('Yoda')).toEqual('yoda');
    expect(service.getAvatarClass('R4-P17')).toEqual('r4-p17');
  });
});
