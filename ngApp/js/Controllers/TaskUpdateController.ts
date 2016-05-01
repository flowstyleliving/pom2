namespace app.Controllers {
  export class TaskUpdateController {
    public task: app.i.ITask;

    public update() {
      this.TaskService.update(this.task).then((res) => {
        this.$state.go('Home')
      })
    }

    public remove() {
      this.TaskService.remove(this.task._id).then((res) => {
        this.$state.go('Home')
      })
    }

    constructor(
      private TaskService: app.Services.TaskService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService
    ) {
      this.task = TaskService.getOne($stateParams['id']).then((res) => {
        this.task = res;
      });
    }
  }
  angular.module('app').controller('TaskUpdateController', TaskUpdateController);
}
