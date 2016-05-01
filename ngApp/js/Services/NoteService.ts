namespace app.Services {
  interface INoteResource extends ng.resource.IResource<INoteResource>,app.i.INote{}
  interface INoteClass extends ng.resource.IResourceClass<INoteResource> {update(params: Object, body: Object)}

  export class NoteService {
    private NoteResource: INoteClass;

    public create(note: app.i.INote) {
      return this.NoteResource.save(note).$promise;
    }

    public remove(id: string) {
      return this.NoteResource.remove({id: id}).$promise;
    }

    public update(note: app.i.INote) {
      return this.NoteResource.update({id: note._id}, {title: note.title}).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService){
      this.NoteResource = <INoteClass>$resource('/api/v1/tasks/:id', null, {
        'update': {method: 'PUT'}
    })
  }
  }
  angular.module('app').service('NoteService', NoteService);
}
