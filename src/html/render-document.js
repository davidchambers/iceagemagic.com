import renderFragment from './render-fragment.js';

//    renderDocument :: Node -> String
const renderDocument = html => (
  '<!DOCTYPE html>\n' +
  renderFragment ('  ') (0) (false) ([html])
);

export default renderDocument;
