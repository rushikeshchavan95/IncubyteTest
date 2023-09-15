const Spacecraft = require('./spacecraft');

describe('Spacecraft', () => {
  let spacecraft;

  beforeEach(() => {
    spacecraft = new Spacecraft();
  });

  it('should initialize with default values', () => {
    expect(spacecraft.getPosition()).toEqual({ x: 0, y: 0, z: 0 });
    expect(spacecraft.getDirection()).toBe('N');
  });

  it('should move forward correctly', () => {
    spacecraft.executeCommand('f');
    expect(spacecraft.getPosition()).toEqual({ x: 0, y: 1, z: 0 });
  });

  it('should move backward correctly', () => {
    spacecraft.executeCommand('b');
    expect(spacecraft.getPosition()).toEqual({ x: 0, y: -1, z: 0 });
  });

  it('should move left correctly', () => {
    spacecraft.executeCommand('l');
    expect(spacecraft.getPosition()).toEqual({ x: -1, y: 0, z: 0 });
  });

  it('should move right correctly', () => {
    spacecraft.executeCommand('r');
    expect(spacecraft.getPosition()).toEqual({ x: 1, y: 0, z: 0 });
  });

  it('should move up correctly', () => {
    spacecraft.executeCommand('u');
    expect(spacecraft.getPosition()).toEqual({ x: 0, y: 0, z: 1 });
  });

  it('should move down correctly', () => {
    spacecraft.executeCommand('d');
    expect(spacecraft.getPosition()).toEqual({ x: 0, y: 0, z: -1 });
  });

});