describe('LocalStorage',function () {
  it('support flag property',function() {
    expect($.support.localStorage).toBeTruthy();
    expect($.support.localStorage).toBe(true);
    });
  it('write method',function() {
    var result = $.localStorage('test2','test');
    expect(result).toBe('test');
    });
  it('read method',function() {
    var result = $.localStorage('test2','test');
    expect($.localStorage('test2')).toBe('test');
    });
  it('remove method',function() {
    expect($.removeLocalStorage('test2')).toBeUndefined();
    expect($.localStorage('test2')).toBeUndefined();
    });
  it('io method',function() {
    var io = $.localStorage.io('key3');
    expect(io.key).toBe('key3');
    expect(io.write('test3')).toBe('test3');
    expect(io.read()).toBe('test3');
    expect(io.remove()).toBeUndefined();
    expect(io.read()).toBeUndefined();
  });
});
