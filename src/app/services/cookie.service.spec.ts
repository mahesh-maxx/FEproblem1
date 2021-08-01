import { CookieService } from './cookie.service';

describe('Service: Cookie Service', () => {
  const testdata = {
    cookiename: 'gatewayTokenCookie',
    data: 'cookieValue',
    expiration: '120'
  };

  let cookieService: CookieService;

  beforeEach(() => {
    cookieService = new CookieService();
  });
  describe('get()', () => {
    it('should return null for Cookie name as cookie does not exists', () => {
      expect(cookieService.get('cookieValue')).toEqual(null);
    });
    it('should return cookie value for passed Cookie name', () => {
      spyOn(cookieService, 'get').and.returnValue('cookieValue');

      expect(cookieService.get('cookieName')).toEqual('cookieValue');
    });
  });
  describe('set()', () => {
    it('should set the Cookie name', () => {
      cookieService.set(
        testdata.cookiename,
        testdata.data,
        testdata.expiration
      );
      expect(cookieService.get(testdata.cookiename)).toEqual(testdata.data);
    });
  });
});
