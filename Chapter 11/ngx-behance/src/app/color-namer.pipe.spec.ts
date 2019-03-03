import { ColorNamerPipe } from './color-namer.pipe';

describe('ColorNamerPipe', () => {
  it('create an instance', () => {
    const pipe = new ColorNamerPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return current color', () => {
    const pipe = new ColorNamerPipe();
    let transformedValue = pipe.transform({
      r: 255,
      g: 255,
      b: 255
    });
    expect(transformedValue).toEqual('white');
    transformedValue = pipe.transform({
      r: 255,
      g: 0,
      b: 0,
    });
    expect(transformedValue).toEqual('red');
    transformedValue = pipe.transform({
      r: 0,
      g: 255,
      b: 0,
    });
    expect(transformedValue).toEqual('lime');

  });
});
