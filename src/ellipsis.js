(function($) {
  var StringIterator = function(html) {
    this.html = html;
    this.length = html.length;
    this.index = 0;
    this.tags = [];

    this.countClosedTagChar = function() {
      for (var i = 1; i < this.length; i++) {
        if (this.html[this.index + i] === '>') {
          return i + 1;
        }
      }
      throw new Error('tag is not closed.');
    }
    this.isCloseTag = function(tag) {
      return tag[1] === '/';
    }
    this.toCloseTag = function(openTag) {
      return openTag.substr(0, 1) + '/' + openTag.substr(1);
    }
  };

  StringIterator.prototype.next = function() {
    var next = this.html[this.index];
    if (!next) {
      return null;
    } else if (next === '<') {
      var pos = this.countClosedTagChar();
      var tag = this.html.slice(this.index, this.index + pos);
      if (this.isCloseTag(tag)) {
        this.tags.pop();
      } else {
        this.tags.push(this.toCloseTag(tag));
      }
      this.index += pos;
      return { value: tag, tag: true};
    } else {
      this.index++;
      return { value: next, tag: false};
    }
  };

  StringIterator.prototype.popAllCloseTags = function() {
    return this.tags.join('');
  };
  $.fn.ellipsis = function(options) {
    var settings = $.extend({
      size: 10,
      omission: '...',
    }, options);

    return this.each(function() {
      var self = $(this);
      var init = function() {
        self.each(function() {
          var ite = new StringIterator($(this).html().trim());
          var i = ite.next();
          var ellipsised = "";
          var textSize = 0;
          var size = self.attr('data-ellipsis-length') || settings.size
          while (i) {
            ellipsised += i.value;
            if (!i.tag) {
              textSize++;
            }
            if (textSize >= size) {
              ellipsised += ite.popAllCloseTags();
              break;
            }
            i = ite.next();
          }
          $(this).html(ellipsised + settings.omission);
        });
      };
      init();
    });
  };
})(jQuery);

