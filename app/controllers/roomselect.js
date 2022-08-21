import { use, resource } from 'ember-resources';
import { tracked } from '@glimmer/tracking';

class RequestState {
  @tracked value;
  @tracked error;

  get isPending() {
    return !this.error && !this.value;
  }
}

export default class RoomselectController extends Controller {
    @service router;

    @use request = resource(({ on }) => {
      const mobile = '123123123';
      const state = new RequestState();
    
      $.ajax({
        url: 'My',
        method: 'GET',
        dataType: 'json',
        data: { mobile },
        success: (response) => state.value = response ,
        error: (xhr, status, error) => state.error = `${status}: ${xhr.statusText}`,
      });

      return state;
    });

    get result() {
      return this.request.value || [];
    }

}