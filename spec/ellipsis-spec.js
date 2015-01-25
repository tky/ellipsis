describe('ellipsis', function() {
    it('ellipsis simple text', function() {
      var target = $('#text');
      target.html('今日は金曜日です。');
      target.ellipsis({ size: 2 });
      var result = target.html();
      expect('今日...').toBe(result);
    });
    it('ellipsis contains strong tag executed before tag', function() {
      var target = $('#text');
      target.html('今日は<strong>金曜日</strong>です。');
      target.ellipsis({ size: 3 });
      var result = target.html();
      expect('今日は...').toBe(result);
    });
    it('ellipsis contains strong tag executed within tag', function() {
      var target = $('#text');
      target.html('今日は<strong>金曜日</strong>です。');
      target.ellipsis({ size: 4 });
      var result = target.html();
      expect('今日は<strong>金</strong>...').toBe(result);
    });
    it('ellipsis contains strong tag executed just over tag', function() {
      var target = $('#text');
      target.html('今日は<strong>金曜日</strong>です。');
      target.ellipsis({ size: 6 });
      var result = target.html();
      expect('今日は<strong>金曜日</strong>...').toBe(result);
    });
    it('ellipsis contains strong tag executed over tag', function() {
      var target = $('#text');
      target.html('今日は<strong>金曜日</strong>です。');
      target.ellipsis({ size: 7 });
      var result = target.html();
      expect('今日は<strong>金曜日</strong>で...').toBe(result);
    });
    it('ellipsis contains 2 tags.', function() {
      var target = $('#text');
      target.html('<p>今日は<strong>金曜日</strong>です。</p>');
      target.ellipsis({ size: 6 });
      var result = target.html();
      expect('<p>今日は<strong>金曜日</strong></p>...').toBe(result);
    });
    it('ellipsis size is from data-ellipsis-length', function() {
      var target = $('#text-with-length');
      target.html('今日は金曜日です。');
      target.ellipsis();
      var result = target.html();
      expect('今...').toBe(result);
    });
});
