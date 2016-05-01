namespace app.Controllers {
  export class TaskDetailsController {
    public task: app.i.ITask;
    public note: app.i.INote;

    public createNote() {
      this.note.task = this.task._id;
      this.NoteService.create(this.note).then((res) => {
        this.task.notes.push(res);
        this.note.title="";
        this.note.user="";
      })
    }

    public removeNote(n: app.i.INote) {
      this.NoteService.remove(n._id).then(() => {
      this.task.notes.splice(this.task.notes.indexOf(n),1);
      });
    }

    constructor(
      private TaskService: app.Services.TaskService,
      private NoteService: app.Services.NoteService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService
    ) {
      this.task = TaskService.getOne($stateParams['id']).then((res) => {
      this.task = res;
    })
    }
  }
  angular.module('app').controller('TaskDetailsController', TaskDetailsController);
}
