const names: string[] = ["Aissa", "Moha"];
const ages: number[] = [17, 24];

function getRandomValue<T>(array: T[]): void {
  const randomNumber: number = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

getRandomValue<string>(names);
getRandomValue<number>(ages);
