const utils = {
	/**
	 * 判断Object是否为空
	 * @param  {[type]}  obj [description]
	 * @return {Boolean}     [description]
	 */
	isEmptyObject (obj) {
    var name
    for (name in obj) return false
    return true
  },
	/**
   * 本地存储
   */
  localStorage: function () {
      return storage(window.localStorage);
  }(),

  /**
   * Session存储
   */
  sessionStorage: function () {
      return storage(window.sessionStorage);
  }(),

  /**
   * 序列化
   * @param value
   * @returns {string}
   */
  serialize: function (value) {
      if (typeof value === 'string') return value;
      return JSON.stringify(value);
  },

  /**
   * 反序列化
   * @param value
   * @returns {*}
   */
  deserialize: function (value) {
      if (typeof value !== 'string') return undefined;
      try {
          return JSON.parse(value);
      } catch (e) {
          return value || undefined;
      }
  },

  isExternal:function(path){
    return /^(https?:|mailto:|tel:)/.test(path)

  }
}
/**
 * HTML5存储
 */
function storage (ls) {
    return {
        set: function (key, value) {
            ls.setItem(key, utils.serialize(value));
        },
        get: function (key) {
            return utils.deserialize(ls.getItem(key));
        },
        remove: function (key) {
            ls.removeItem(key);
        },
        clear: function () {
            ls.clear();
        }
    };
}

export default utils;