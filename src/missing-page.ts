export class MissingPage {
  public static parameters = ['id'];
  public missingComponent: string ;

  public enter(parameters) {
    this.missingComponent = parameters.id;
  }
}
