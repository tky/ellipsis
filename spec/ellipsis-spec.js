describe('ellipsis', function() {
    it('ellipsis simple text', function() {
      $('#test1').ellipsis({ size: 2 });
      var result = $('#test1').html();
      expect('今日...').toBe(result);
    });
    it('ellipsis contains strong tag executed before tag', function() {
      $('#test2').ellipsis({ size: 3 });
      var result = $('#test2').html();
      expect('今日は...').toBe(result);
    });
    it('ellipsis contains strong tag executed within tag', function() {
      $('#test3').ellipsis({ size: 4 });
      var result = $('#test3').html();
      expect('今日は<strong>金</strong>...').toBe(result);
    });
    it('ellipsis contains strong tag executed just over tag', function() {
      $('#test4').ellipsis({ size: 6 });
      var result = $('#test4').html();
      expect('今日は<strong>金曜日</strong>...').toBe(result);
    });
    it('ellipsis contains strong tag executed over tag', function() {
      $('#test5').ellipsis({ size: 7 });
      var result = $('#test5').html();
      expect('今日は<strong>金曜日</strong>で...').toBe(result);
    });
    it('ellipsis contains 2 tags.', function() {
      $('#test6').ellipsis({ size: 6 });
      var result = $('#test6').html();
      expect('<p>今日は<strong>金曜日</strong></p>...').toBe(result);
    });
    it('ellipsis size is from data-ellipsis-length', function() {
      $('#test7').ellipsis();
      var result = $('#test7').html();
      expect('今...').toBe(result);
    });
});
