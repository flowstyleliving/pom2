namespace app.Controllers {
  export class TaskCreateController {
    public task;

    public create() {
      this.TaskService.create(this.task).then((res) => {
        this.$state.go('Home')
      })
    }


    constructor(
      private TaskService: app.Services.TaskService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService
    ) {}
  }
  angular.module('app').controller('TaskCreateController', TaskCreateController);
}
