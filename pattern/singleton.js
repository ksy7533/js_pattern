
/**
 * 싱글톤 패턴
 * - 전체 시스템에서 하나의 인스턴스만 존재하도록 한다
 * - 특정 클래스의 인스턴스를 오직 하나만 존재하고 동일한 클래스로 인스턴스를 재생성해도 처음 만들어진 객체를 갖는다
 */


const singletone = (function() {
  let instance = null;

  function createInstance() {
    let name = '수정';
    return {
      getName: function() {
        return name;
      }
    }
  }

  return {
    getInstance: function() {
      if(instance === null) {
        instance = createInstance();
      }
      return instance;
    },
  }
})();

const singleton1 = singletone.getInstance();
const singleton2 = singletone.getInstance();

console.log(singleton1.getName() === singleton2.getName());
