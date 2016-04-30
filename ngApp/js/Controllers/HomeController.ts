namespace app.Controllers {
  export class HomeController {
    public user;
    public tasks: Array<app.i.ITask>

    constructor(
      private TaskService: app.Services.TaskService,
      private $state: ng.ui.IStateService
    ) {
      this.tasks = TaskService.getAll();
    }
  }
  angular.module('app').controller('HomeController', HomeController);
}
