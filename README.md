>바로가기 http://reserver1.dothome.co.kr/portfolio/shop/index.html

# Snippet

 * butes 보기 편하게
 
```c
function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
```

 * UUID 생성기

```c
function getUUID() { // UUID v4 generator in JavaScript (RFC4122 compliant)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
      return v.toString(16);
  });
}
```

 * 글자 수 생략

```c
function ellipsisTxt(txt, length) {
  if ( txt && (txt.length > length) ) {
      return txt.substr(0, length) + '…';
  } else {
      return txt;
  }
}
```

 * 9999-99-99 

```c
const regex = /(^[0-9-]*$)/;
if (regex.test(e.target.value)) {
    $(this).val(autoHyphenDate(e.target.value));
} else {
    $(this).val(autoHyphenDate(e.target.value.slice(0, -1)));
}

function autoHyphenDate(str) {
  let v = str.replace("--", "-");
  let last = v[v.length-1];
  let origin = v.substr(0, v.length-1);

  if ( v.match(/^\d{4}$/) !== null ) {
      v = v + '-';
  } else if ( v.match(/^\d{5}$/) !== null ) {
      v = origin + '-' + last;
  } else if (v.match(/^\d{4}\-\d{2}$/) !== null) {
      v = v + '-';
  } else if (v.match(/^\d{4}\-\d{3}$/) !== null) {
      v = origin + '-' + last;
  }

  return v;
}
```

 * 이벤트 n번 실행

```c
const times = (times, func) => {
  if (isNaN(times)) {
    console.error("times to run must be specified");
    return
  }
  if (typeof func !== "function") {
    console.error(`func must be a valid function, ${typeof func} provided`);
    return
  }
  Array.from(Array(times)).forEach(() => {
    func();
  })
}

times(3, () => console.log("hello"));
```

 * random Number 생성

```c
const getRandomNumberInRange = (lower = 0, upper = 10) => {
  if (isNaN(lower) || isNaN(upper)) {
    console.error("lower and upper must be valid numbers");
    return
  }
  lower = Math.ceil(lower);
  upper = Math.floor(upper);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
```

 * 배열 중복 제거

```c
const removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) {
    console.error(`array expected, ${typeof arr} provided`);
    return
  }
  return [...new Set(arr)];
}

removeDuplicates(["Tom", "Simon", "Tom", "Sarah"]);
```

 * 함수 성능 측정

```c
const measureTime = (func, label = "default") => {
  if (typeof func !== "function") {
    console.error(`func must be a valid function, ${typeof func} provided`);
    return
  }
  console.time(label);
  func();
  console.timeEnd(label);
}

measureTime("findPeople", someExpensiveFindPeopleFunction);
```

 * 문자열 슬러그화(Slugify)

```c
const slugify = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof str} provided`);
    return str;
  }
  return text.toLowerCase();
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

slugify("Hello, everyone!"); // hello-everyone
```

 * 카멜케이스 -> 뱀케이스

```c
const camelToSnakeCase = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  return text.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

camelToSnakeCase("camelCaseToSnakeCase"); // camel_case_to_snake_case
```

 * 뱀케이스 -> 카멜케이스

```c
const snakeToCamelCase = (text) => {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  text
    .toLowerCase()
    .replace(/([-_][a-z])/g, group =>
      group
        .toUpperCase()
        .replace("-", "")
        .replace("_", "")
    );
}

snakeToCamelCase("snake_case_to_camel_case"); // snakeCaseToCamelCase
```

 * 이메일 유효성 검사

```c
const emailIsValid = (email) => {
  if (!(typeof email === "string" || email instanceof String)) {
    console.error(`string expected, ${typeof email} provided`);
    return false
  }
  const expression = /\S+@\S+\.\S+/;
  return expression.test(email);
}

emailIsValid("somebody@somewhere.com"); // true
emailIsValid("nobody@nowhere"); // false
```

 * 외부 클릭 처리

```c
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};

onClickOutside("red-box", () => console.log("Clicked outside red box"));

document.addEventListener("DOMContentLoaded", onClickOutside);
```

 * 스크롤 정지 확인

```c
const onScrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, 150);
    },
    false
  );
};

onScrollStop(() => {
  console.log('The user has stopped scrolling');
});
```

 * CapsLock 감지

```c
// Assume, el is an input element, and msg is a p tag to show message.

el.addEventListener('keyup', e => {
  msg.style = e.getModifierState('CapsLock')
    ? 'display: block'
    : 'display: none';
});
```
