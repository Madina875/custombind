Function.prototype.bind2 = function (context, ...args) {
  const originalFn = this;

  return function (...newArgs) {
    return originalFn.apply(context, [...args, ...newArgs]);
  };
};

const person = {
  name: "Madina",
};

function introduce(lang, emoji) {
  console.log(`Hi, I'm ${this.name}. I speak ${lang} ${emoji}`);
}

const introducingPerson = introduce.bind2(person, "English");

introducingPerson("🌸");
