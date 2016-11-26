module.exports = "<div class=\"richarea-app\">\n  <div class=\"richarea-editor\">\n    <ul class=\"sortable\">\n      <li :class=\"{active: currentIdx==index }\" :data-index=\"index\" @click=\"select\" @dblclick=\"edit\" v-for=\"(item,index) in items\">\n        <div class=\"tools\">\n          <span class=\"move btn btn-success btn-xs glyphicon glyphicon-resize-vertical\"></span>\n          <span @click=\"add(index)\" class=\"add btn btn-default btn-xs glyphicon glyphicon-plus\"></span>\n          <span @click=\"edit\" class=\"settings btn btn-default btn-xs glyphicon glyphicon-cog\"></span>\n          <span @click=\"duplicate\" class=\"duplicate btn btn-default btn-xs glyphicon glyphicon-duplicate\"></span>\n          <span @click=\"remove\" class=\"delete btn btn-danger btn-xs glyphicon glyphicon-remove\"></span>\n        </div>\n        <div class=\"item\">\n          <layout :is=\"'c'+item.layout_id\" :item=\"item\"></layout>\n        </div>\n      </li>\n      <li class=\"disabled add text-center\">\n        <button @click.prevent=\"add(null)\" class=\"btn btn-primary btn-xl\">+</button>\n      </li>\n    </ul>\n    <div class=\"modal fade layout-settings\" role=\"dialog\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button class=\"close\" @click=\"close\">\n              <span class=\"glyphicon glyphicon-remove\"></span>\n            </button>\n            <h4 class=\"modal-title\">Edit Component</h4>\n          </div>\n          <div class=\"modal-body\">\n            <template v-if=\"currentLayout\">\n              <template v-if=\"Object.keys(currentLayout.fields).length>0\">\n                <div v-for=\"(field,fieldName) in currentLayout.fields\">\n                  <div class=\"form-horizontal\">\n                    <div class=\"form-group\">\n                      <label class=\"col-xs-2 control-label\">{{fieldName | titlecase}}</label>\n                      <div class=\"col-xs-10\">\n                        <component :is=\"'edit-'+field.editor\" :item=\"currentItem\" :field-name=\"fieldName\"></component>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </template>\n              <template v-else>\n                There are no fields to edit for this layout.\n              </template>\n            </template>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-default\"  @click=\"close\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"modal modal-fullscreen fade layouts-modal\" role=\"dialog\">\n      <div class=\"modal-dialog layout-selector\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button class=\"close\" data-dismiss=\"modal\">\n              <span class=\"glyphicon glyphicon-remove\"></span>\n            </button>\n            <h4 class=\"modal-title\">Add Component</h4>\n          </div>\n          <div class=\"modal-body\">\n            <div>\n              <div :class=\"{'btn-success': selectedCategory == cat[0], 'btn-primary': selectedCategory != cat[0] }\" @click=\"selectCat(cat)\" class=\"btn btn-xs\" style=\"margin: 2px;\" v-for=\"cat in layoutCategories\">\n                {{cat[1]}}\n              </div>\n            </div>\n            <img class=\"layout\" data-dismiss=\"modal\" :data-layout-id=\"layout.id\" :src=\"layout.thumb\" v-for=\"(layout,index) in layouts\" v-if=\"inActiveCategories(layout)\" v-on:click=\"insert(layout.id)\"/>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";