console.log('interface');

namespace isp1 {
  interface Animal {
    eat(): void;
    sleep(): void;
    cry(): void;
    fly(): void;
  }
  
  class Bird implements Animal {
    eat(): void {
      console.log('새가 음식을 먹었어요!');
    }
    sleep(): void {
      console.log('Zzzzzz....');
    }
    cry(): void {
      console.log('짹짹!!');
    }
    fly(): void {
      console.log('새가 하늘을 날았어요!');
    }
  }
  
  class Human implements Animal {
    eat(): void {
      console.log('아 배부르다');
    }
    sleep(): void {
      console.log('Zzzzzz....');
    }
    cry(): void {
      console.log('ㅠㅠㅠ');
    }
    fly(): void {
      // ????
    }
  }
}

//
//
//
//
//
//
//
//
//
//
//

namespace isp2 {
  interface Animal {
    eat(): void;
    sleep(): void;
    cry(): void;
  }

  interface Flyable {
    fly(): void;
  }

  class Bird implements Animal, Flyable {
    eat(): void {
      console.log('새가 음식을 먹었어요!');
    }
    sleep(): void {
      console.log('Zzzzzz....');
    }
    cry(): void {
      console.log('짹짹!!');
    }
    fly(): void {
      console.log('새가 하늘을 날았어요!');
    }
  }

  class Human implements Animal {
    eat(): void {
      console.log('아 배부르다');
    }
    sleep(): void {
      console.log('Zzzzzz....');
    }
    cry(): void {
      console.log('ㅠㅠㅠ');
    }
  }
}
