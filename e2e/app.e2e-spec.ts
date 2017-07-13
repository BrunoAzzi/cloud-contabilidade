import { CloudContabilidadePage } from './app.po';

describe('cloud-contabilidade App', () => {
  let page: CloudContabilidadePage;

  beforeEach(() => {
    page = new CloudContabilidadePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
