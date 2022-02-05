import create from 'zustand';

const useStore: any = create(() => ({
  circlesAmount: 4,
  linesAmount: 4,
  radius: 100,
  verticesAmount: 100,
}));

export { useStore };
