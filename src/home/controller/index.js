'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  msglistAction(){
    //auto render template file index_index.html
    return this.display();
  }
  leiAction(){
    //auto render template file index_index.html
    return this.display();
  }
}