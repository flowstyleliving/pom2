namespace app.Services {
  export class UserService {
    public user: app.i.IUser;

    constructor(
      private $resource: ng.resource.IResourceService,
      private $http: ng.IHttpService,
      private $q: ng.IQService,
      private $window: ng.IWindowService
    ) {
      if(this.getToken()) this.setUser();
    }
  }
  angular.module('app').service('UserService', UserService);
}
