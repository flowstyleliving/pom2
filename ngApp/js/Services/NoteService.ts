namespace app.Services {
  interface INoteResource extends ng.resource.IResource<INoteResource>,app.i.INote{}
  interface INoteClass extends ng.resource.IResourceClass<INoteResource> {}

  export class NoteService {
    private NoteResource: INoteClass;

    public create(note: app.i.INote) {
      return this.NoteResource.save(note).$promise;
    }

    public remove(id: string) {
      return this.NoteResource.remove({id: id}).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService){
      this.NoteResource = <INoteResource>$resource('/api/v1/notes/:id')
    }
  }
  angular.module('app').service('NoteService', NoteService);
}
