import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    });
  }
  toHTML() {
    return createTable(200)
  }


  onMousedown(event) {
    if (event.target.dataset.resize) {
      resizeHandler(this.$root, event)
    }
  }
}
