(function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /*! (c) Andrea Giammarchi - ISC */
  var self = null ||
  /* istanbul ignore next */
  {};

  try {
    self.WeakMap = WeakMap;
  } catch (WeakMap) {
    // this could be better but 90% of the time
    // it's everything developers need as fallback
    self.WeakMap = function (id, Object) {

      var dP = Object.defineProperty;
      var hOP = Object.hasOwnProperty;
      var proto = WeakMap.prototype;

      proto["delete"] = function (key) {
        return this.has(key) && delete key[this._];
      };

      proto.get = function (key) {
        return this.has(key) ? key[this._] : void 0;
      };

      proto.has = function (key) {
        return hOP.call(key, this._);
      };

      proto.set = function (key, value) {
        dP(key, this._, {
          configurable: true,
          value: value
        });
        return this;
      };

      return WeakMap;

      function WeakMap(iterable) {
        dP(this, '_', {
          value: '_@ungap/weakmap' + id++
        });
        if (iterable) iterable.forEach(add, this);
      }

      function add(pair) {
        this.set(pair[0], pair[1]);
      }
    }(Math.random(), Object);
  }

  var WeakMap$1 = self.WeakMap;

  function hyphenizer(s, c) {
    return s.replace(/([A-Z])([A-Z][a-z])/g, c = '$1' + (c || '-') + '$2').replace(/([a-z])([A-Z])/g, c).toLowerCase();
  }

  /*! (c) Andrea Giammarchi - ISC */
  var self$1 = null ||
  /* istanbul ignore next */
  {};

  try {
    self$1.Event = new Event('.').constructor;
  } catch (Event) {
    try {
      self$1.Event = new CustomEvent('.').constructor;
    } catch (Event) {
      self$1.Event = function Event(type, init) {
        if (!init) init = {};
        var e = document.createEvent('Event');
        var bubbles = !!init.bubbles;
        var cancelable = !!init.cancelable;
        e.initEvent(type, bubbles, cancelable);

        try {
          e.bubbles = bubbles;
          e.cancelable = cancelable;
        } catch (e) {}

        return e;
      };
    }
  }

  var Event$1 = self$1.Event;

  /*! (c) Andrea Giammarchi - ISC */
  var self$2 = null ||
  /* istanbul ignore next */
  {};

  try {
    self$2.WeakSet = WeakSet;
  } catch (WeakSet) {
    // requires a global WeakMap (IE11+)
    (function (WeakMap) {
      var all = new WeakMap();
      var proto = WeakSet.prototype;

      proto.add = function (value) {
        return all.get(this).set(value, 1), this;
      };

      proto["delete"] = function (value) {
        return all.get(this)["delete"](value);
      };

      proto.has = function (value) {
        return all.get(this).has(value);
      };

      self$2.WeakSet = WeakSet;

      function WeakSet(iterable) {

        all.set(this, new WeakMap());
        if (iterable) iterable.forEach(this.add, this);
      }
    })(WeakMap);
  }

  var WeakSet$1 = self$2.WeakSet;

  var isNoOp = (typeof document === "undefined" ? "undefined" : _typeof(document)) !== 'object';

  var _templateLiteral = function templateLiteral(tl) {
    var RAW = 'raw';

    var isBroken = function isBroken(UA) {
      return /(Firefox|Safari)\/(\d+)/.test(UA) && !/(Chrom[eium]+|Android)\/(\d+)/.test(UA);
    };

    var broken = isBroken((document.defaultView.navigator || {}).userAgent);
    var FTS = !(RAW in tl) || tl.propertyIsEnumerable(RAW) || !Object.isFrozen(tl[RAW]);

    if (broken || FTS) {
      var forever = {};

      var foreverCache = function foreverCache(tl) {
        for (var key = '.', i = 0; i < tl.length; i++) {
          key += tl[i].length + '.' + tl[i];
        }

        return forever[key] || (forever[key] = tl);
      }; // Fallback TypeScript shenanigans


      if (FTS) _templateLiteral = foreverCache; // try fast path for other browsers:
      // store the template as WeakMap key
      // and forever cache it only when it's not there.
      // this way performance is still optimal,
      // penalized only when there are GC issues
      else {
          var wm = new WeakMap$1();

          var set = function set(tl, unique) {
            wm.set(tl, unique);
            return unique;
          };

          _templateLiteral = function templateLiteral(tl) {
            return wm.get(tl) || set(tl, foreverCache(tl));
          };
        }
    } else {
      isNoOp = true;
    }

    return TL(tl);
  };

  function TL(tl) {
    return isNoOp ? tl : _templateLiteral(tl);
  }

  function tta (template) {
    var length = arguments.length;
    var args = [TL(template)];
    var i = 1;

    while (i < length) {
      args.push(arguments[i++]);
    }

    return args;
  }

  /*! (c) Andrea Giammarchi - ISC */
  var Wire = function (slice, proto) {
    proto = Wire.prototype;
    proto.ELEMENT_NODE = 1;
    proto.nodeType = 111;

    proto.remove = function (keepFirst) {
      var childNodes = this.childNodes;
      var first = this.firstChild;
      var last = this.lastChild;
      this._ = null;

      if (keepFirst && childNodes.length === 2) {
        last.parentNode.removeChild(last);
      } else {
        var range = this.ownerDocument.createRange();
        range.setStartBefore(keepFirst ? childNodes[1] : first);
        range.setEndAfter(last);
        range.deleteContents();
      }

      return first;
    };

    proto.valueOf = function (forceAppend) {
      var fragment = this._;
      var noFragment = fragment == null;
      if (noFragment) fragment = this._ = this.ownerDocument.createDocumentFragment();

      if (noFragment || forceAppend) {
        for (var n = this.childNodes, i = 0, l = n.length; i < l; i++) {
          fragment.appendChild(n[i]);
        }
      }

      return fragment;
    };

    return Wire;

    function Wire(childNodes) {
      var nodes = this.childNodes = slice.call(childNodes, 0);
      this.firstChild = nodes[0];
      this.lastChild = nodes[nodes.length - 1];
      this.ownerDocument = nodes[0].ownerDocument;
      this._ = null;
    }
  }([].slice);

  var isArray = Array.isArray;
  var wireType = Wire.prototype.nodeType;
  Object.freeze(Hole);

  function Hole(type, args) {
    this.type = type;
    this.args = args;
  }

  /*! (c) Andrea Giammarchi - ISC */
  var createContent = function (document) {

    var FRAGMENT = 'fragment';
    var TEMPLATE = 'template';
    var HAS_CONTENT = 'content' in create(TEMPLATE);
    var createHTML = HAS_CONTENT ? function (html) {
      var template = create(TEMPLATE);
      template.innerHTML = html;
      return template.content;
    } : function (html) {
      var content = create(FRAGMENT);
      var template = create(TEMPLATE);
      var childNodes = null;

      if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
        var selector = RegExp.$1;
        template.innerHTML = '<table>' + html + '</table>';
        childNodes = template.querySelectorAll(selector);
      } else {
        template.innerHTML = html;
        childNodes = template.childNodes;
      }

      append(content, childNodes);
      return content;
    };
    return function createContent(markup, type) {
      return (type === 'svg' ? createSVG : createHTML)(markup);
    };

    function append(root, childNodes) {
      var length = childNodes.length;

      while (length--) {
        root.appendChild(childNodes[0]);
      }
    }

    function create(element) {
      return element === FRAGMENT ? document.createDocumentFragment() : document.createElementNS('http://www.w3.org/1999/xhtml', element);
    } // it could use createElementNS when hasNode is there
    // but this fallback is equally fast and easier to maintain
    // it is also battle tested already in all IE


    function createSVG(svg) {
      var content = create(FRAGMENT);
      var template = create('div');
      template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
      append(content, template.firstChild.childNodes);
      return content;
    }
  }(document);

  /*! (c) Andrea Giammarchi - ISC */
  var self$3 = null ||
  /* istanbul ignore next */
  {};

  try {
    self$3.Map = Map;
  } catch (Map) {
    self$3.Map = function Map() {
      var i = 0;
      var k = [];
      var v = [];
      return {
        "delete": function _delete(key) {
          var had = contains(key);

          if (had) {
            k.splice(i, 1);
            v.splice(i, 1);
          }

          return had;
        },
        forEach: function forEach(callback, context) {
          k.forEach(function (key, i) {
            callback.call(context, v[i], key, this);
          }, this);
        },
        get: function get(key) {
          return contains(key) ? v[i] : void 0;
        },
        has: function has(key) {
          return contains(key);
        },
        set: function set(key, value) {
          v[contains(key) ? i : k.push(key) - 1] = value;
          return this;
        }
      };

      function contains(v) {
        i = k.indexOf(v);
        return -1 < i;
      }
    };
  }

  var Map$1 = self$3.Map;

  var iOF = [].indexOf;
  var append = function append(get, parent, children, start, end, before) {
    var isSelect = 'selectedIndex' in parent;
    var noSelection = isSelect;

    while (start < end) {
      var child = get(children[start], 1);
      parent.insertBefore(child, before);

      if (isSelect && noSelection && child.selected) {
        noSelection = !noSelection;
        var selectedIndex = parent.selectedIndex;
        parent.selectedIndex = selectedIndex < 0 ? start : iOF.call(parent.querySelectorAll('option'), child);
      }

      start++;
    }
  };
  var eqeq = function eqeq(a, b) {
    return a == b;
  };
  var identity = function identity(O) {
    return O;
  };
  var indexOf = function indexOf(moreNodes, moreStart, moreEnd, lessNodes, lessStart, lessEnd, compare) {
    var length = lessEnd - lessStart;
    /* istanbul ignore if */

    if (length < 1) return -1;

    while (moreEnd - moreStart >= length) {
      var m = moreStart;
      var l = lessStart;

      while (m < moreEnd && l < lessEnd && compare(moreNodes[m], lessNodes[l])) {
        m++;
        l++;
      }

      if (l === lessEnd) return moreStart;
      moreStart = m + 1;
    }

    return -1;
  };
  var isReversed = function isReversed(futureNodes, futureEnd, currentNodes, currentStart, currentEnd, compare) {
    while (currentStart < currentEnd && compare(currentNodes[currentStart], futureNodes[futureEnd - 1])) {
      currentStart++;
      futureEnd--;
    }
    return futureEnd === 0;
  };
  var next = function next(get, list, i, length, before) {
    return i < length ? get(list[i], 0) : 0 < i ? get(list[i - 1], -0).nextSibling : before;
  };
  var remove = function remove(get, parent, children, start, end) {
    if (end - start < 2) parent.removeChild(get(children[start], -1));else {
      var range = parent.ownerDocument.createRange();
      range.setStartBefore(get(children[start], -1));
      range.setEndAfter(get(children[end - 1], -1));
      range.deleteContents();
    }
  }; // - - - - - - - - - - - - - - - - - - -
  // diff related constants and utilities
  // - - - - - - - - - - - - - - - - - - -

  var DELETION = -1;
  var INSERTION = 1;
  var SKIP = 0;
  var SKIP_OND = 50;

  var HS = function HS(futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges) {
    var k = 0;
    /* istanbul ignore next */

    var minLen = futureChanges < currentChanges ? futureChanges : currentChanges;
    var link = Array(minLen++);
    var tresh = Array(minLen);
    tresh[0] = -1;

    for (var i = 1; i < minLen; i++) {
      tresh[i] = currentEnd;
    }

    var keymap = new Map$1();

    for (var _i = currentStart; _i < currentEnd; _i++) {
      keymap.set(currentNodes[_i], _i);
    }

    for (var _i2 = futureStart; _i2 < futureEnd; _i2++) {
      var idxInOld = keymap.get(futureNodes[_i2]);

      if (idxInOld != null) {
        k = findK(tresh, minLen, idxInOld);
        /* istanbul ignore else */

        if (-1 < k) {
          tresh[k] = idxInOld;
          link[k] = {
            newi: _i2,
            oldi: idxInOld,
            prev: link[k - 1]
          };
        }
      }
    }

    k = --minLen;
    --currentEnd;

    while (tresh[k] > currentEnd) {
      --k;
    }

    minLen = currentChanges + futureChanges - k;
    var diff = Array(minLen);
    var ptr = link[k];
    --futureEnd;

    while (ptr) {
      var _ptr = ptr,
          newi = _ptr.newi,
          oldi = _ptr.oldi;

      while (futureEnd > newi) {
        diff[--minLen] = INSERTION;
        --futureEnd;
      }

      while (currentEnd > oldi) {
        diff[--minLen] = DELETION;
        --currentEnd;
      }

      diff[--minLen] = SKIP;
      --futureEnd;
      --currentEnd;
      ptr = ptr.prev;
    }

    while (futureEnd >= futureStart) {
      diff[--minLen] = INSERTION;
      --futureEnd;
    }

    while (currentEnd >= currentStart) {
      diff[--minLen] = DELETION;
      --currentEnd;
    }

    return diff;
  }; // this is pretty much the same petit-dom code without the delete map part
  // https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L556-L561


  var OND = function OND(futureNodes, futureStart, rows, currentNodes, currentStart, cols, compare) {
    var length = rows + cols;
    var v = [];
    var d, k, r, c, pv, cv, pd;

    outer: for (d = 0; d <= length; d++) {
      /* istanbul ignore if */
      if (d > SKIP_OND) return null;
      pd = d - 1;
      /* istanbul ignore next */

      pv = d ? v[d - 1] : [0, 0];
      cv = v[d] = [];

      for (k = -d; k <= d; k += 2) {
        if (k === -d || k !== d && pv[pd + k - 1] < pv[pd + k + 1]) {
          c = pv[pd + k + 1];
        } else {
          c = pv[pd + k - 1] + 1;
        }

        r = c - k;

        while (c < cols && r < rows && compare(currentNodes[currentStart + c], futureNodes[futureStart + r])) {
          c++;
          r++;
        }

        if (c === cols && r === rows) {
          break outer;
        }

        cv[d + k] = c;
      }
    }

    var diff = Array(d / 2 + length / 2);
    var diffIdx = diff.length - 1;

    for (d = v.length - 1; d >= 0; d--) {
      while (c > 0 && r > 0 && compare(currentNodes[currentStart + c - 1], futureNodes[futureStart + r - 1])) {
        // diagonal edge = equality
        diff[diffIdx--] = SKIP;
        c--;
        r--;
      }

      if (!d) break;
      pd = d - 1;
      /* istanbul ignore next */

      pv = d ? v[d - 1] : [0, 0];
      k = c - r;

      if (k === -d || k !== d && pv[pd + k - 1] < pv[pd + k + 1]) {
        // vertical edge = insertion
        r--;
        diff[diffIdx--] = INSERTION;
      } else {
        // horizontal edge = deletion
        c--;
        diff[diffIdx--] = DELETION;
      }
    }

    return diff;
  };

  var applyDiff = function applyDiff(diff, get, parentNode, futureNodes, futureStart, currentNodes, currentStart, currentLength, before) {
    var live = new Map$1();
    var length = diff.length;
    var currentIndex = currentStart;
    var i = 0;

    while (i < length) {
      switch (diff[i++]) {
        case SKIP:
          futureStart++;
          currentIndex++;
          break;

        case INSERTION:
          // TODO: bulk appends for sequential nodes
          live.set(futureNodes[futureStart], 1);
          append(get, parentNode, futureNodes, futureStart++, futureStart, currentIndex < currentLength ? get(currentNodes[currentIndex], 0) : before);
          break;

        case DELETION:
          currentIndex++;
          break;
      }
    }

    i = 0;

    while (i < length) {
      switch (diff[i++]) {
        case SKIP:
          currentStart++;
          break;

        case DELETION:
          // TODO: bulk removes for sequential nodes
          if (live.has(currentNodes[currentStart])) currentStart++;else remove(get, parentNode, currentNodes, currentStart++, currentStart);
          break;
      }
    }
  };

  var findK = function findK(ktr, length, j) {
    var lo = 1;
    var hi = length;

    while (lo < hi) {
      var mid = (lo + hi) / 2 >>> 0;
      if (j < ktr[mid]) hi = mid;else lo = mid + 1;
    }

    return lo;
  };

  var smartDiff = function smartDiff(get, parentNode, futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges, currentLength, compare, before) {
    applyDiff(OND(futureNodes, futureStart, futureChanges, currentNodes, currentStart, currentChanges, compare) || HS(futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges), get, parentNode, futureNodes, futureStart, currentNodes, currentStart, currentLength, before);
  };

  /*! (c) 2018 Andrea Giammarchi (ISC) */

  var domdiff = function domdiff(parentNode, // where changes happen
  currentNodes, // Array of current items/nodes
  futureNodes, // Array of future items/nodes
  options // optional object with one of the following properties
  //  before: domNode
  //  compare(generic, generic) => true if same generic
  //  node(generic) => Node
  ) {
    if (!options) options = {};
    var compare = options.compare || eqeq;
    var get = options.node || identity;
    var before = options.before == null ? null : get(options.before, 0);
    var currentLength = currentNodes.length;
    var currentEnd = currentLength;
    var currentStart = 0;
    var futureEnd = futureNodes.length;
    var futureStart = 0; // common prefix

    while (currentStart < currentEnd && futureStart < futureEnd && compare(currentNodes[currentStart], futureNodes[futureStart])) {
      currentStart++;
      futureStart++;
    } // common suffix


    while (currentStart < currentEnd && futureStart < futureEnd && compare(currentNodes[currentEnd - 1], futureNodes[futureEnd - 1])) {
      currentEnd--;
      futureEnd--;
    }

    var currentSame = currentStart === currentEnd;
    var futureSame = futureStart === futureEnd; // same list

    if (currentSame && futureSame) return futureNodes; // only stuff to add

    if (currentSame && futureStart < futureEnd) {
      append(get, parentNode, futureNodes, futureStart, futureEnd, next(get, currentNodes, currentStart, currentLength, before));
      return futureNodes;
    } // only stuff to remove


    if (futureSame && currentStart < currentEnd) {
      remove(get, parentNode, currentNodes, currentStart, currentEnd);
      return futureNodes;
    }

    var currentChanges = currentEnd - currentStart;
    var futureChanges = futureEnd - futureStart;
    var i = -1; // 2 simple indels: the shortest sequence is a subsequence of the longest

    if (currentChanges < futureChanges) {
      i = indexOf(futureNodes, futureStart, futureEnd, currentNodes, currentStart, currentEnd, compare); // inner diff

      if (-1 < i) {
        append(get, parentNode, futureNodes, futureStart, i, get(currentNodes[currentStart], 0));
        append(get, parentNode, futureNodes, i + currentChanges, futureEnd, next(get, currentNodes, currentEnd, currentLength, before));
        return futureNodes;
      }
    }
    /* istanbul ignore else */
    else if (futureChanges < currentChanges) {
        i = indexOf(currentNodes, currentStart, currentEnd, futureNodes, futureStart, futureEnd, compare); // outer diff

        if (-1 < i) {
          remove(get, parentNode, currentNodes, currentStart, i);
          remove(get, parentNode, currentNodes, i + futureChanges, currentEnd);
          return futureNodes;
        }
      } // common case with one replacement for many nodes
    // or many nodes replaced for a single one

    /* istanbul ignore else */


    if (currentChanges < 2 || futureChanges < 2) {
      append(get, parentNode, futureNodes, futureStart, futureEnd, get(currentNodes[currentStart], 0));
      remove(get, parentNode, currentNodes, currentStart, currentEnd);
      return futureNodes;
    } // the half match diff part has been skipped in petit-dom
    // https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L391-L397
    // accordingly, I think it's safe to skip in here too
    // if one day it'll come out like the speediest thing ever to do
    // then I might add it in here too
    // Extra: before going too fancy, what about reversed lists ?
    //        This should bail out pretty quickly if that's not the case.


    if (currentChanges === futureChanges && isReversed(futureNodes, futureEnd, currentNodes, currentStart, currentEnd, compare)) {
      append(get, parentNode, futureNodes, futureStart, futureEnd, next(get, currentNodes, currentEnd, currentLength, before));
      return futureNodes;
    } // last resort through a smart diff


    smartDiff(get, parentNode, futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges, currentLength, compare, before);
    return futureNodes;
  };

  /*! (c) Andrea Giammarchi - ISC */
  var importNode = function (document, appendChild, cloneNode, createTextNode, importNode) {
    var _native = importNode in document; // IE 11 has problems with cloning templates:
    // it "forgets" empty childNodes. This feature-detects that.


    var fragment = document.createDocumentFragment();
    fragment[appendChild](document[createTextNode]('g'));
    fragment[appendChild](document[createTextNode](''));
    var content = _native ? document[importNode](fragment, true) : fragment[cloneNode](true);
    return content.childNodes.length < 2 ? function importNode(node, deep) {
      var clone = node[cloneNode]();

      for (var childNodes = node.childNodes || [], length = childNodes.length, i = 0; deep && i < length; i++) {
        clone[appendChild](importNode(childNodes[i], deep));
      }

      return clone;
    } : _native ? document[importNode] : function (node, deep) {
      return node[cloneNode](!!deep);
    };
  }(document, 'appendChild', 'cloneNode', 'createTextNode', 'importNode');

  var trim = ''.trim || function () {
    return String(this).replace(/^\s+|\s+/g, '');
  };

  /*! (c) Andrea Giammarchi - ISC */
  // Custom
  var UID = '-' + Math.random().toFixed(6) + '%'; //                           Edge issue!

  var UID_IE = false;

  try {
    if (!function (template, content, tabindex) {
      return content in template && (template.innerHTML = '<p ' + tabindex + '="' + UID + '"></p>', template[content].childNodes[0].getAttribute(tabindex) == UID);
    }(document.createElement('template'), 'content', 'tabindex')) {
      UID = '_dt: ' + UID.slice(1, -1) + ';';
      UID_IE = true;
    }
  } catch (meh) {}

  var UIDC = '<!--' + UID + '-->'; // DOM

  var COMMENT_NODE = 8;
  var ELEMENT_NODE = 1;
  var TEXT_NODE = 3;
  var SHOULD_USE_TEXT_CONTENT = /^(?:style|textarea)$/i;
  var VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;

  /*! (c) Andrea Giammarchi - ISC */
  function sanitize (template) {
    return template.join(UIDC).replace(selfClosing, fullClosing).replace(attrSeeker, attrReplacer);
  }
  var spaces = ' \\f\\n\\r\\t';
  var almostEverything = '[^' + spaces + '\\/>"\'=]+';
  var attrName = '[' + spaces + ']+' + almostEverything;
  var tagName = '<([A-Za-z]+[A-Za-z0-9:._-]*)((?:';
  var attrPartials = '(?:\\s*=\\s*(?:\'[^\']*?\'|"[^"]*?"|<[^>]*?>|' + almostEverything.replace('\\/', '') + '))?)';
  var attrSeeker = new RegExp(tagName + attrName + attrPartials + '+)([' + spaces + ']*/?>)', 'g');
  var selfClosing = new RegExp(tagName + attrName + attrPartials + '*)([' + spaces + ']*/>)', 'g');
  var findAttributes = new RegExp('(' + attrName + '\\s*=\\s*)([\'"]?)' + UIDC + '\\2', 'gi');

  function attrReplacer($0, $1, $2, $3) {
    return '<' + $1 + $2.replace(findAttributes, replaceAttributes) + $3;
  }

  function replaceAttributes($0, $1, $2) {
    return $1 + ($2 || '"') + UID + ($2 || '"');
  }

  function fullClosing($0, $1, $2) {
    return VOID_ELEMENTS.test($1) ? $0 : '<' + $1 + $2 + '></' + $1 + '>';
  }

  function find(node, path) {
    var length = path.length;
    var i = 0;

    while (i < length) {
      node = node.childNodes[path[i++]];
    }

    return node;
  }

  function parse(node, holes, parts, path) {
    var childNodes = node.childNodes;
    var length = childNodes.length;
    var i = 0;

    while (i < length) {
      var child = childNodes[i];

      switch (child.nodeType) {
        case ELEMENT_NODE:
          var childPath = path.concat(i);
          parseAttributes(child, holes, parts, childPath);
          parse(child, holes, parts, childPath);
          break;

        case COMMENT_NODE:
          var textContent = child.textContent;

          if (textContent === UID) {
            parts.shift();
            holes.push( // basicHTML or other non standard engines
            // might end up having comments in nodes
            // where they shouldn't, hence this check.
            SHOULD_USE_TEXT_CONTENT.test(node.nodeName) ? Text(node, path) : Any(child, path.concat(i)));
          } else {
            switch (textContent.slice(0, 2)) {
              case '/*':
                if (textContent.slice(-2) !== '*/') break;

              case "\uD83D\uDC7B":
                // ghost
                node.removeChild(child);
                i--;
                length--;
            }
          }

          break;

        case TEXT_NODE:
          // the following ignore is actually covered by browsers
          // only basicHTML ends up on previous COMMENT_NODE case
          // instead of TEXT_NODE because it knows nothing about
          // special style or textarea behavior

          /* istanbul ignore if */
          if (SHOULD_USE_TEXT_CONTENT.test(node.nodeName) && trim.call(child.textContent) === UIDC) {
            parts.shift();
            holes.push(Text(node, path));
          }

          break;
      }

      i++;
    }
  }

  function parseAttributes(node, holes, parts, path) {
    var cache = new Map$1();
    var attributes = node.attributes;
    var remove = [];
    var array = remove.slice.call(attributes, 0);
    var length = array.length;
    var i = 0;

    while (i < length) {
      var attribute = array[i++];
      var direct = attribute.value === UID;
      var sparse;

      if (direct || 1 < (sparse = attribute.value.split(UIDC)).length) {
        var name = attribute.name; // the following ignore is covered by IE
        // and the IE9 double viewBox test

        /* istanbul ignore else */

        if (!cache.has(name)) {
          var realName = parts.shift().replace(direct ? /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/ : new RegExp('^(?:|[\\S\\s]*?\\s)(' + name + ')\\s*=\\s*(\'|")', 'i'), '$1');
          var value = attributes[realName] || // the following ignore is covered by browsers
          // while basicHTML is already case-sensitive

          /* istanbul ignore next */
          attributes[realName.toLowerCase()];
          cache.set(name, value);
          if (direct) holes.push(Attr(value, path, realName, null));else {
            var skip = sparse.length - 2;

            while (skip--) {
              parts.shift();
            }

            holes.push(Attr(value, path, realName, sparse));
          }
        }

        remove.push(attribute);
      }
    }

    length = remove.length;
    i = 0;

    while (i < length) {
      // Edge HTML bug #16878726
      var attr = remove[i++];
      if (/^id$/i.test(attr.name)) node.removeAttribute(attr.name); // standard browsers would work just fine here
      else node.removeAttributeNode(attr);
    } // This is a very specific Firefox/Safari issue
    // but since it should be a not so common pattern,
    // it's probably worth patching regardless.
    // Basically, scripts created through strings are death.
    // You need to create fresh new scripts instead.
    // TODO: is there any other node that needs such nonsense?


    var nodeName = node.nodeName;

    if (/^script$/i.test(nodeName)) {
      // this used to be like that
      // var script = createElement(node, nodeName);
      // then Edge arrived and decided that scripts created
      // through template documents aren't worth executing
      // so it became this ... hopefully it won't hurt in the wild
      var script = document.createElement(nodeName);
      length = attributes.length;
      i = 0;

      while (i < length) {
        script.setAttributeNode(attributes[i++].cloneNode(true));
      }

      script.textContent = node.textContent;
      node.parentNode.replaceChild(script, node);
    }
  }

  function Any(node, path) {
    return {
      type: 'any',
      node: node,
      path: path
    };
  }

  function Attr(node, path, name, sparse) {
    return {
      type: 'attr',
      node: node,
      path: path,
      name: name,
      sparse: sparse
    };
  }

  function Text(node, path) {
    return {
      type: 'text',
      node: node,
      path: path
    };
  }

  // globals
  var parsed = new WeakMap$1();
  var referenced = new WeakMap$1();

  function createInfo(options, template) {
    var markup = sanitize(template);
    var transform = options.transform;
    if (transform) markup = transform(markup);
    var content = createContent(markup, options.type);
    cleanContent(content);
    var holes = [];
    parse(content, holes, template.slice(0), []);
    var info = {
      content: content,
      updates: function updates(content) {
        var updates = [];
        var len = holes.length;
        var i = 0;
        var off = 0;

        while (i < len) {
          var info = holes[i++];
          var node = find(content, info.path);

          switch (info.type) {
            case 'any':
              updates.push({
                fn: options.any(node, []),
                sparse: false
              });
              break;

            case 'attr':
              var sparse = info.sparse;
              var fn = options.attribute(node, info.name, info.node);
              if (sparse === null) updates.push({
                fn: fn,
                sparse: false
              });else {
                off += sparse.length - 2;
                updates.push({
                  fn: fn,
                  sparse: true,
                  values: sparse
                });
              }
              break;

            case 'text':
              updates.push({
                fn: options.text(node),
                sparse: false
              });
              node.textContent = '';
              break;
          }
        }

        len += off;
        return function () {
          var length = arguments.length;

          if (len !== length - 1) {
            throw new Error(length - 1 + ' values instead of ' + len + '\n' + template.join('${value}'));
          }

          var i = 1;
          var off = 1;

          while (i < length) {
            var update = updates[i - off];

            if (update.sparse) {
              var values = update.values;
              var value = values[0];
              var j = 1;
              var l = values.length;
              off += l - 2;

              while (j < l) {
                value += arguments[i++] + values[j++];
              }

              update.fn(value);
            } else update.fn(arguments[i++]);
          }

          return content;
        };
      }
    };
    parsed.set(template, info);
    return info;
  }

  function createDetails(options, template) {
    var info = parsed.get(template) || createInfo(options, template);
    var content = importNode.call(document, info.content, true);
    var details = {
      content: content,
      template: template,
      updates: info.updates(content)
    };
    referenced.set(options, details);
    return details;
  }

  function domtagger(options) {
    return function (template) {
      var details = referenced.get(options);
      if (details == null || details.template !== template) details = createDetails(options, template);
      details.updates.apply(null, arguments);
      return details.content;
    };
  }

  function cleanContent(fragment) {
    var childNodes = fragment.childNodes;
    var i = childNodes.length;

    while (i--) {
      var child = childNodes[i];

      if (child.nodeType !== 1 && trim.call(child.textContent).length === 0) {
        fragment.removeChild(child);
      }
    }
  }

  /*! (c) Andrea Giammarchi - ISC */
  var hyperStyle = function () {

    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var hyphen = /([^A-Z])([A-Z]+)/g;
    return function hyperStyle(node, original) {
      return 'ownerSVGElement' in node ? svg(node, original) : update(node.style, false);
    };

    function ized($0, $1, $2) {
      return $1 + '-' + $2.toLowerCase();
    }

    function svg(node, original) {
      var style;
      if (original) style = original.cloneNode(true);else {
        node.setAttribute('style', '--hyper:style;');
        style = node.getAttributeNode('style');
      }
      style.value = '';
      node.setAttributeNode(style);
      return update(style, true);
    }

    function toStyle(object) {
      var key,
          css = [];

      for (key in object) {
        css.push(key.replace(hyphen, ized), ':', object[key], ';');
      }

      return css.join('');
    }

    function update(style, isSVG) {
      var oldType, oldValue;
      return function (newValue) {
        var info, key, styleValue, value;

        switch (_typeof(newValue)) {
          case 'object':
            if (newValue) {
              if (oldType === 'object') {
                if (!isSVG) {
                  if (oldValue !== newValue) {
                    for (key in oldValue) {
                      if (!(key in newValue)) {
                        style[key] = '';
                      }
                    }
                  }
                }
              } else {
                if (isSVG) style.value = '';else style.cssText = '';
              }

              info = isSVG ? {} : style;

              for (key in newValue) {
                value = newValue[key];
                styleValue = typeof value === 'number' && !IS_NON_DIMENSIONAL.test(key) ? value + 'px' : value;
                if (!isSVG && /^--/.test(key)) info.setProperty(key, styleValue);else info[key] = styleValue;
              }

              oldType = 'object';
              if (isSVG) style.value = toStyle(oldValue = info);else oldValue = newValue;
              break;
            }

          default:
            if (oldValue != newValue) {
              oldType = 'string';
              oldValue = newValue;
              if (isSVG) style.value = newValue || '';else style.cssText = newValue || '';
            }

            break;
        }
      };
    }
  }();

  var OWNER_SVG_ELEMENT = 'ownerSVGElement'; // returns nodes from wires and components

  var asNode = function asNode(item, i) {
    return item.nodeType === wireType ? 1 / i < 0 ? i ? item.remove(true) : item.lastChild : i ? item.valueOf(true) : item.firstChild : item;
  }; // returns true if domdiff can handle the value


  var canDiff = function canDiff(value) {
    return 'ELEMENT_NODE' in value;
  }; // generic attributes helpers


  var hyperAttribute = function hyperAttribute(node, original) {
    var oldValue;
    var owner = false;
    var attribute = original.cloneNode(true);
    return function (newValue) {
      if (oldValue !== newValue) {
        oldValue = newValue;

        if (attribute.value !== newValue) {
          if (newValue == null) {
            if (owner) {
              owner = false;
              node.removeAttributeNode(attribute);
            }

            attribute.value = newValue;
          } else {
            attribute.value = newValue;

            if (!owner) {
              owner = true;
              node.setAttributeNode(attribute);
            }
          }
        }
      }
    };
  }; // events attributes helpers


  var hyperEvent = function hyperEvent(node, name) {
    var oldValue;
    var type = name.slice(2);
    if (name.toLowerCase() in node) type = type.toLowerCase();
    return function (newValue) {
      if (oldValue !== newValue) {
        if (oldValue) node.removeEventListener(type, oldValue, false);
        oldValue = newValue;
        if (newValue) node.addEventListener(type, newValue, false);
      }
    };
  }; // special attributes helpers


  var hyperProperty = function hyperProperty(node, name) {
    var oldValue;
    return function (newValue) {
      if (oldValue !== newValue) {
        oldValue = newValue;

        if (node[name] !== newValue) {
          if (newValue == null) {
            // cleanup before dropping the attribute to fix IE/Edge gotcha
            node[name] = '';
            node.removeAttribute(name);
          } else node[name] = newValue;
        }
      }
    };
  }; // special hooks helpers


  var hyperRef = function hyperRef(node) {
    return function (ref) {
      ref.current = node;
    };
  };

  var hyperSetter = function hyperSetter(node, name) {
    return function (value) {
      node[name] = value;
    };
  }; // list of attributes that should not be directly assigned


  var readOnly = /^(?:form|list)$/i; // reused every slice time

  var slice = [].slice; // simplifies text node creation

  var text = function text(node, _text) {
    return node.ownerDocument.createTextNode(_text);
  };

  function Tagger(type) {
    this.type = type;
    return domtagger(this);
  }
  Tagger.prototype = {
    // there are four kind of attributes, and related behavior:
    //  * events, with a name starting with `on`, to add/remove event listeners
    //  * special, with a name present in their inherited prototype, accessed directly
    //  * regular, accessed through get/setAttribute standard DOM methods
    //  * style, the only regular attribute that also accepts an object as value
    //    so that you can style=${{width: 120}}. In this case, the behavior has been
    //    fully inspired by Preact library and its simplicity.
    attribute: function attribute(node, name, original) {
      switch (name) {
        case 'class':
          if (OWNER_SVG_ELEMENT in node) return hyperAttribute(node, original);
          name = 'className';

        case 'data':
        case 'props':
          return hyperProperty(node, name);

        case 'style':
          return hyperStyle(node, original, OWNER_SVG_ELEMENT in node);

        case 'ref':
          return hyperRef(node);

        default:
          if (name.slice(0, 1) === '.') return hyperSetter(node, name.slice(1));
          if (name.slice(0, 2) === 'on') return hyperEvent(node, name);
          if (name in node && !(OWNER_SVG_ELEMENT in node || readOnly.test(name))) return hyperProperty(node, name);
          return hyperAttribute(node, original);
      }
    },
    // in a hyper(node)`<div>${content}</div>` case
    // everything could happen:
    //  * it's a JS primitive, stored as text
    //  * it's null or undefined, the node should be cleaned
    //  * it's a promise, update the content once resolved
    //  * it's an explicit intent, perform the desired operation
    //  * it's an Array, resolve all values if Promises and/or
    //    update the node with the resulting list of content
    any: function any(node, childNodes) {
      var diffOptions = {
        node: asNode,
        before: node
      };
      var nodeType = OWNER_SVG_ELEMENT in node ?
      /* istanbul ignore next */
      'svg' : 'html';
      var fastPath = false;
      var oldValue;

      var anyContent = function anyContent(value) {
        switch (_typeof(value)) {
          case 'string':
          case 'number':
          case 'boolean':
            if (fastPath) {
              if (oldValue !== value) {
                oldValue = value;
                childNodes[0].textContent = value;
              }
            } else {
              fastPath = true;
              oldValue = value;
              childNodes = domdiff(node.parentNode, childNodes, [text(node, value)], diffOptions);
            }

            break;

          case 'function':
            anyContent(value(node));
            break;

          case 'object':
          case 'undefined':
            if (value == null) {
              fastPath = false;
              childNodes = domdiff(node.parentNode, childNodes, [], diffOptions);
              break;
            }

          default:
            fastPath = false;
            oldValue = value;

            if (isArray(value)) {
              if (value.length === 0) {
                if (childNodes.length) {
                  childNodes = domdiff(node.parentNode, childNodes, [], diffOptions);
                }
              } else {
                switch (_typeof(value[0])) {
                  case 'string':
                  case 'number':
                  case 'boolean':
                    anyContent(String(value));
                    break;

                  case 'function':
                    anyContent(value.map(invoke, node));
                    break;

                  case 'object':
                    if (isArray(value[0])) {
                      value = value.concat.apply([], value);
                    }

                  default:
                    childNodes = domdiff(node.parentNode, childNodes, value, diffOptions);
                    break;
                }
              }
            } else if (canDiff(value)) {
              childNodes = domdiff(node.parentNode, childNodes, value.nodeType === 11 ? slice.call(value.childNodes) : [value], diffOptions);
            } else if ('text' in value) {
              anyContent(String(value.text));
            } else if ('any' in value) {
              anyContent(value.any);
            } else if ('html' in value) {
              childNodes = domdiff(node.parentNode, childNodes, slice.call(createContent([].concat(value.html).join(''), nodeType).childNodes), diffOptions);
            } else if ('length' in value) {
              anyContent(slice.call(value));
            }

            break;
        }
      };

      return anyContent;
    },
    // style or textareas don't accept HTML as content
    // it's pointless to transform or analyze anything
    // different from text there but it's worth checking
    // for possible defined intents.
    text: function text(node) {
      var oldValue;

      var textContent = function textContent(value) {
        if (oldValue !== value) {
          oldValue = value;

          var type = _typeof(value);

          if (type === 'object' && value) {
            if ('text' in value) {
              textContent(String(value.text));
            } else if ('any' in value) {
              textContent(value.any);
            } else if ('html' in value) {
              textContent([].concat(value.html).join(''));
            } else if ('length' in value) {
              textContent(slice.call(value).join(''));
            }
          } else if (type === 'function') {
            textContent(value(node));
          } else {
            node.textContent = value == null ? '' : value;
          }
        }
      };

      return textContent;
    }
  };

  function invoke(callback) {
    return callback(this);
  }

  var create = Object.create,
      keys = Object.keys;
  var wm = new WeakMap$1();
  var container = new WeakMap$1();
  var dtPrototype = Tagger.prototype;
  var current = null;

  var lighterhtml = function lighterhtml(Tagger) {
    var html = outer('html', Tagger);
    var svg = outer('svg', Tagger);
    return {
      html: html,
      svg: svg,
      hook: function hook(useRef) {
        return {
          html: createHook(useRef, html),
          svg: createHook(useRef, svg)
        };
      },
      render: function render(node, callback) {
        var value = update.call(this, node, callback, Tagger);

        if (container.get(node) !== value) {
          container.set(node, value);
          appendClean(node, value);
        }

        return node;
      }
    };
  };

  var custom = function custom(overrides) {
    var prototype = create(dtPrototype);
    keys(overrides).forEach(function (key) {
      // assign the method after passing along the previous one
      // falling back to String for the transform case to have API
      // consistency
      prototype[key] = overrides[key](prototype[key]) || String;
    });
    Tagger$1.prototype = prototype;
    return lighterhtml(Tagger$1);

    function Tagger$1() {
      return Tagger.apply(this, arguments);
    }
  };

  var _lighterhtml = lighterhtml(Tagger);

  function appendClean(node, fragment) {
    node.textContent = '';
    node.appendChild(fragment);
  }

  function asNode$1(result, forceFragment) {
    return result.nodeType === wireType ? result.valueOf(forceFragment) : result;
  }

  function createHook(useRef, view) {
    return function () {
      var ref = useRef(null);
      if (ref.current === null) ref.current = view["for"](ref);
      return asNode$1(ref.current.apply(null, arguments), false);
    };
  }

  function outer(type, Tagger) {
    var wm = new WeakMap$1();

    tag["for"] = function (identity, id) {
      var ref = wm.get(identity) || set(identity);
      if (id == null) id = '$';
      return ref[id] || create(ref, id);
    };

    return tag;

    function create(ref, id) {
      var args = [];
      var wire = null;
      var tagger = new Tagger(type);

      var callback = function callback() {
        return tagger.apply(null, unrollArray(args, 1, 1, Tagger));
      };

      return ref[id] = function () {
        args = tta.apply(null, arguments);
        var result = update(tagger, callback, Tagger);
        return wire || (wire = wiredContent(result));
      };
    }

    function set(identity) {
      var ref = {
        '$': null
      };
      wm.set(identity, ref);
      return ref;
    }

    function tag() {
      var args = tta.apply(null, arguments);
      return current ? new Hole(type, args) : new Tagger(type).apply(null, args);
    }
  }

  function set(node) {
    var info = {
      i: 0,
      length: 0,
      stack: [],
      update: false
    };
    wm.set(node, info);
    return info;
  }

  function update(reference, callback, Tagger) {
    var prev = current;
    current = wm.get(reference) || set(reference);
    current.i = 0;
    var ret = callback.call(this);
    var value;

    if (ret instanceof Hole) {
      value = asNode$1(unroll(ret, 0, Tagger), current.update);
      var _current = current,
          i = _current.i,
          length = _current.length,
          stack = _current.stack,
          _update = _current.update;
      if (i < length) stack.splice(current.length = i);
      if (_update) current.update = false;
    } else {
      value = asNode$1(ret, false);
    }

    current = prev;
    return value;
  }

  function unroll(hole, level, Tagger) {
    var _current2 = current,
        i = _current2.i,
        length = _current2.length,
        stack = _current2.stack;
    var type = hole.type,
        args = hole.args;
    var stacked = i < length;
    current.i++;
    if (!stacked) current.length = stack.push({
      l: level,
      kind: type,
      tag: null,
      tpl: args[0],
      wire: null
    });
    unrollArray(args, 1, level + 1, Tagger);
    var info = stack[i];

    if (stacked) {
      var control = info.l,
          kind = info.kind,
          _tag = info.tag,
          tpl = info.tpl,
          _wire = info.wire;

      if (control === level && type === kind && tpl === args[0]) {
        _tag.apply(null, args);

        return _wire;
      }
    }

    var tag = new Tagger(type);
    var wire = wiredContent(tag.apply(null, args));
    info.l = level;
    info.kind = type;
    info.tag = tag;
    info.tpl = args[0];
    info.wire = wire;
    if (i < 1) current.update = true;
    return wire;
  }

  function unrollArray(arr, i, level, Tagger) {
    for (var length = arr.length; i < length; i++) {
      var value = arr[i];

      if (_typeof(value) === 'object' && value) {
        if (value instanceof Hole) {
          arr[i] = unroll(value, level - 1, Tagger);
        } else if (isArray(value)) {
          arr[i] = unrollArray(value, 0, level++, Tagger);
        }
      }
    }

    return arr;
  }

  function wiredContent(node) {
    var childNodes = node.childNodes;
    var length = childNodes.length;
    return length === 1 ? childNodes[0] : length ? new Wire(childNodes) : node;
  }

  var transpiled = null; // the angry koala check @WebReflection/status/1133757401482584064

  try {
    transpiled = new {
      o: function o() {}
    }.o();
  } catch ($) {}

  var extend = function extend(Super) {
    return (
      /*#__PURE__*/
      function (_Super) {
        _inherits(_class, _Super);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
        }

        return _class;
      }(Super)
    );
  };

  if (transpiled) {
    var getPrototypeOf = Object.getPrototypeOf,
        setPrototypeOf = Object.setPrototypeOf;

    var _ref = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect : {
      construct: function construct(Super, args, Target) {
        var a = [null];

        for (var i = 0; i < args.length; i++) {
          a.push(args[i]);
        }

        var Parent = Super.bind.apply(Super, a);
        return setPrototypeOf(new Parent(), Target.prototype);
      }
    },
        construct = _ref.construct;

    extend = function extend(Super, cutTheMiddleMan) {
      function Class() {
        return construct(cutTheMiddleMan ? getPrototypeOf(Super) : Super, arguments, Class);
      }

      setPrototypeOf(Class.prototype, Super.prototype);
      return setPrototypeOf(Class, Super);
    };
  }

  var hash = function hash(s) {
    var length = s.length;
    var t = 0;
    var i = 0;

    while (i < length) {
      t = (t << 5) - t + s.charCodeAt(i++);
      t = t & t;
    }

    return t.toString(36);
  };

  var registry = {
    map: {},
    re: null
  };

  var regExp = function regExp(keys) {
    return new RegExp("<(/)?(".concat(keys.join('|'), ")([^A-Za-z0-9:._-])"), 'g');
  };

  var tmp = null;

  var replace = function replace(markup, info) {
    var _ref2 = tmp || info,
        map = _ref2.map,
        re = _ref2.re;

    return markup.replace(re, function (_, close, name, after) {
      var _map$name = map[name],
          tagName = _map$name.tagName,
          is = _map$name.is,
          element = _map$name.element;
      return element ? close ? "</".concat(is, ">") : "<".concat(is).concat(after) : close ? "</".concat(tagName, ">") : "<".concat(tagName, " is=\"").concat(is, "\"").concat(after);
    });
  };

  var selector = function selector(_ref3) {
    var tagName = _ref3.tagName,
        is = _ref3.is,
        element = _ref3.element;
    return element ? is : "".concat(tagName, "[is=\"").concat(is, "\"]");
  };

  var getInfo = function getInfo() {
    return tmp;
  };

  var setInfo = function setInfo(info) {
    tmp = info;
  };

  var _custom = custom({
    transform: function transform($) {
      return function (markup) {
        return replace(markup, registry);
      };
    }
  }),
      lighterRender = _custom.render,
      lighterHTML = _custom.html,
      lighterSVG = _custom.svg;

  var secret = "_\uD83D\uDD25";
  var defineProperties = Object.defineProperties;
  var $html = new WeakMap$1();
  var $svg = new WeakMap$1();
  var ws = new WeakSet$1();
  var configurable = true;
  var attributeChangedCallback = 'attributeChangedCallback';
  var connectedCallback = 'connectedCallback';
  var disconnectedCallback = "dis".concat(connectedCallback);

  var addInit = function addInit(prototype, properties, method) {
    if (method in prototype) {
      var original = prototype[method];
      properties[method] = {
        configurable: configurable,
        value: function value() {
          init.call(this);
          return original.apply(this, arguments);
        }
      };
    } else properties[method] = {
      configurable: configurable,
      value: init
    };
  };

  var augmented = function augmented(Class) {
    var prototype = Class.prototype;
    var events = [];
    var properties = {
      html: {
        configurable: configurable,
        get: getHTML
      },
      svg: {
        configurable: configurable,
        get: getSVG
      }
    };
    properties[secret] = {
      value: {
        events: events,
        info: null
      }
    };
    if (!('handleEvent' in prototype)) properties.handleEvent = {
      configurable: configurable,
      value: handleEvent
    }; // setup the init dispatch only if needed
    // ensure render with an init is triggered after

    if ('oninit' in prototype) {
      events.push('init');
      addInit(prototype, properties, 'render');
    } // ensure all other callbacks are dispatched too


    addInit(prototype, properties, attributeChangedCallback);
    addInit(prototype, properties, connectedCallback);
    addInit(prototype, properties, disconnectedCallback);
    [[attributeChangedCallback, 'onattributechanged', onattributechanged], [connectedCallback, 'onconnected', onconnected], [disconnectedCallback, 'ondisconnected', ondisconnected], [connectedCallback, 'render', onconnectedrender]].forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 3),
          ce = _ref2[0],
          he = _ref2[1],
          _value = _ref2[2];

      if (!(ce in prototype) && he in prototype) {
        if (he !== 'render') events.push(he.slice(2));

        if (ce in properties) {
          var original = properties[ce].value;
          properties[ce] = {
            configurable: configurable,
            value: function value() {
              original.apply(this, arguments);
              return _value.apply(this, arguments);
            }
          };
        } else properties[ce] = {
          configurable: configurable,
          value: _value
        };
      }
    });
    var booleanAttributes = Class.booleanAttributes || [];
    booleanAttributes.forEach(function (name) {
      if (!(name in prototype)) properties[name] = {
        configurable: configurable,
        get: function get() {
          return this.hasAttribute(name);
        },
        set: function set(value) {
          if (!value || value === 'false') this.removeAttribute(name);else this.setAttribute(name, value);
        }
      };
    });
    var observedAttributes = Class.observedAttributes || [];
    observedAttributes.forEach(function (name) {
      if (!(name in prototype)) properties[name] = {
        configurable: configurable,
        get: function get() {
          return this.getAttribute(name);
        },
        set: function set(value) {
          if (value == null) this.removeAttribute(name);else this.setAttribute(name, value);
        }
      };
    });
    defineProperties(prototype, properties);
    var attributes = booleanAttributes.concat(observedAttributes);
    return attributes.length ? defineProperties(Class, {
      observedAttributes: {
        configurable: configurable,
        get: function get() {
          return attributes;
        }
      }
    }) : Class;
  };

  var evt = function evt(type) {
    return new Event$1(type);
  };

  var html = function html() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Hole('html', args);
  };

  html["for"] = lighterHTML["for"];

  var svg = function svg() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return new Hole('svg', args);
  };

  svg["for"] = lighterSVG["for"];

  var render = function render(where, what) {
    return lighterRender(where, typeof what === 'function' ? what : function () {
      return what;
    });
  };

  var setParsed = function setParsed(wm, template, _ref3) {
    var info = _ref3.info;
    var value = info ? replace(template.join(secret), info).split(secret) : template;
    wm.set(template, value);
    return value;
  };

  var setWrap = function setWrap(self, type, wm) {
    var fn = wrap(self, type, new WeakMap$1());
    wm.set(self, fn);
    return fn;
  };

  var wrap = function wrap(self, type, wm) {
    return function (tpl) {
      for (var _len3 = arguments.length, values = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        values[_key3 - 1] = arguments[_key3];
      }

      var template = TL(tpl);
      var local = wm.get(template) || setParsed(wm, template, self[secret]);
      return lighterRender(self, function () {
        return type.apply(void 0, [local].concat(values));
      });
    };
  };

  function addListener(type) {
    this.addEventListener(type, this);
  }

  function getHTML() {
    return $html.get(this) || setWrap(this, html, $html);
  }

  function getSVG() {
    return $svg.get(this) || setWrap(this, svg, $svg);
  }

  function handleEvent(event) {
    this["on".concat(event.type)](event);
  }

  function init() {
    if (!ws.has(this)) {
      ws.add(this);
      this[secret].events.forEach(addListener, this);
      this.dispatchEvent(evt('init'));
    }
  }

  function onattributechanged(attributeName, oldValue, newValue) {
    var event = evt('attributechanged');
    event.attributeName = attributeName;
    event.oldValue = oldValue;
    event.newValue = newValue;
    this.dispatchEvent(event);
  }

  function onconnected() {
    this.dispatchEvent(evt('connected'));
  }

  function onconnectedrender() {
    this.render();
  }

  function ondisconnected() {
    this.dispatchEvent(evt('disconnected'));
  }

  var create$1 = Object.create,
      defineProperty = Object.defineProperty,
      defineProperties$1 = Object.defineProperties,
      getOwnPropertyNames = Object.getOwnPropertyNames,
      getOwnPropertySymbols = Object.getOwnPropertySymbols,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
      keys$1 = Object.keys;
  var HTML = {
    element: HTMLElement
  };
  var cc = new WeakMap$1();
  var oc = new WeakMap$1();

  var info = function info(tagName, is) {
    return {
      tagName: tagName,
      is: is,
      element: tagName === 'element'
    };
  };

  var define = function define($, definition) {
    return (typeof $ === 'string' ? register($, definition, '') : register($.name, $, '')).Class;
  };

  var fromClass = function fromClass(constructor) {
    var Class = extend(constructor, false);
    cc.set(constructor, augmented(Class));
    return Class;
  };

  var fromObject = function fromObject(object, tag) {
    var _grabInfo = grabInfo(object),
        statics = _grabInfo.statics,
        prototype = _grabInfo.prototype;

    var Class = extend(HTML[tag] || (HTML[tag] = document.createElement(tag).constructor), false);
    defineProperties$1(Class.prototype, prototype);
    defineProperties$1(Class, statics);
    oc.set(object, augmented(Class));
    return Class;
  };

  var grabInfo = function grabInfo(object) {
    var statics = create$1(null);
    var prototype = create$1(null);
    var info = {
      prototype: prototype,
      statics: statics
    };
    getOwnPropertyNames(object).concat(getOwnPropertySymbols(object)).forEach(function (name) {
      var descriptor = getOwnPropertyDescriptor(object, name);
      descriptor.enumerable = false;

      switch (name) {
        case 'extends':
          name = 'tagName';

        case 'contains':
        case 'includes':
        case 'name':
        case 'booleanAttributes':
        case 'observedAttributes':
        case 'style':
        case 'tagName':
          statics[name] = descriptor;
          break;

        default:
          prototype[name] = descriptor;
      }
    });
    return info;
  };

  var injectStyle = function injectStyle(cssText) {
    if ((cssText || '').length) {
      var style = document.createElement('style');
      style.type = 'text/css';
      if (style.styleSheet) style.styleSheet.cssText = cssText;else style.appendChild(document.createTextNode(cssText));
      var head = document.head || document.querySelector('head');
      head.insertBefore(style, head.lastChild);
    }
  };

  var ref = function ref(self, name) {
    return self ? self[name] || (self[name] = {
      current: null
    }) : {
      current: null
    };
  };

  var register = function register($, definition, uid) {
    var _customElements;

    if (!/^([A-Z][A-Za-z0-9_]*)(<([A-Za-z0-9:._-]+)>|:([A-Za-z0-9:._-]+))?$/.test($)) throw 'Invalid name';
    var name = RegExp.$1,
        asTag = RegExp.$3,
        asColon = RegExp.$4;
    var tagName = asTag || asColon || definition.tagName || definition["extends"] || "element";
    if (!/^[A-Za-z0-9:._-]+$/.test(tagName)) throw 'Invalid tag';
    var hyphenizedName = '';
    var suffix = '';

    if (tagName.indexOf('-') < 0) {
      hyphenizedName = hyphenizer(name) + uid;
      if (hyphenizedName.indexOf('-') < 0) suffix = '-heresy';
    } else {
      hyphenizedName = tagName + uid;
      tagName = 'element';
    }

    var is = hyphenizedName + suffix;
    if (customElements.get(is)) throw "Duplicated ".concat(is, " definition");
    var Class = extend(_typeof(definition) === 'object' ? oc.get(definition) || fromObject(definition, tagName) : cc.get(definition) || fromClass(definition), true);
    var element = tagName === 'element';
    defineProperty(Class, 'new', {
      value: element ? function () {
        return document.createElement(is);
      } : function () {
        return document.createElement(tagName, {
          is: is
        });
      }
    });
    defineProperty(Class.prototype, 'is', {
      value: is
    }); // for some reason the class must be fully defined upfront
    // or components upgraded from the DOM won't have all details

    if (uid === '') {
      var id = hash(hyphenizedName.toUpperCase());
      registry.map[name] = setupIncludes(Class, tagName, is, {
        id: id,
        i: 0
      });
      registry.re = regExp(keys$1(registry.map));
    }

    var args = [is, Class];
    if (!element) args.push({
      "extends": tagName
    });

    (_customElements = customElements).define.apply(_customElements, args);

    return {
      Class: Class,
      is: is,
      name: name,
      tagName: tagName
    };
  };

  var setupIncludes = function setupIncludes(Class, tagName, is, u) {
    var prototype = Class.prototype;
    var details = info(tagName, is);
    var styles = [selector(details)];
    var includes = Class.includes || Class.contains;

    if (includes) {
      var map = {};
      keys$1(includes).forEach(function ($) {
        var uid = "-".concat(u.id, "-").concat(u.i++);

        var _register = register($, includes[$], uid),
            Class = _register.Class,
            is = _register.is,
            name = _register.name,
            tagName = _register.tagName;

        styles.push(selector(map[name] = setupIncludes(Class, tagName, is, u)));
      });
      var re = regExp(keys$1(map));
      var events = prototype[secret].events;
      var value = {
        events: events,
        info: {
          map: map,
          re: re
        }
      };
      defineProperty(prototype, secret, {
        value: value
      });

      if ('render' in prototype) {
        var _render = prototype.render;
        var _info = value.info;
        defineProperty(prototype, 'render', {
          value: function value() {
            var tmp = getInfo();
            setInfo(_info);

            var out = _render.apply(this, arguments);

            setInfo(tmp);
            return out;
          }
        });
      }
    }

    if ('style' in Class) injectStyle(Class.style.apply(Class, styles));
    return details;
  };

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n            <div class=\"navbar-brand\">\n                <a class=\"navbar-item\" href=\"https://bulma.io\">\n                <img src=\"https://bulma.io/images/bulma-logo.png\" width=\"112\" height=\"28\">\n                </a>\n\n                <a role=\"button\" class=\"navbar-burger burger\" aria-label=\"menu\" aria-expanded=\"false\" data-target=\"navbarBasicExample\">\n                <span aria-hidden=\"true\"></span>\n                <span aria-hidden=\"true\"></span>\n                <span aria-hidden=\"true\"></span>\n                </a>\n            </div>\n\n            <div id=\"navbarBasicExample\" class=\"navbar-menu\">\n                <div class=\"navbar-start\">\n                <a class=\"navbar-item\" onclick=\"", "\">Todo</a>\n\n                <a class=\"navbar-item\" onclick=\"", "\">Login</a>\n\n                <div class=\"navbar-item has-dropdown is-hoverable\">\n                    <a class=\"navbar-link\">\n                    More\n                    </a>\n\n                    <div class=\"navbar-dropdown\">\n                    <a class=\"navbar-item\">\n                        About\n                    </a>\n                    <a class=\"navbar-item\">\n                        Jobs\n                    </a>\n                    <a class=\"navbar-item\">\n                        Contact\n                    </a>\n                    <hr class=\"navbar-divider\">\n                    <a class=\"navbar-item\">\n                        Report an issue\n                    </a>\n                    </div>\n                </div>\n                </div>\n\n                <div class=\"navbar-end\">\n                <div class=\"navbar-item\">\n                    <div class=\"buttons\">\n                    <a class=\"button is-primary\">\n                        <strong>Sign up</strong>\n                    </a>\n                    <a class=\"button is-light\">\n                        Log in\n                    </a>\n                    </div>\n                </div>\n                </div>\n            </div>\n        "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var Header = {
    "extends": 'nav',
    render: function render() {
      this.html(_templateObject(), this.props.handleMenu, this.props.handleMenu);
    }
  };

  function _templateObject$1() {
    var data = _taggedTemplateLiteral(["\n            ", "\n        "]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }

  var Box = {
    "extends": 'div',
    oninit: function oninit() {
      this.setAttribute('class', 'box');
    },
    render: function render() {
      this.html(_templateObject$1(), this.children);
    }
  };

  function _templateObject10() {
    var data = _taggedTemplateLiteral(["\n                    <THead data=\"", "\"/>\n                    <TBody data=\"", "\"/>\n                "]);

    _templateObject10 = function _templateObject10() {
      return data;
    };

    return data;
  }

  function _templateObject9() {
    var data = _taggedTemplateLiteral(["\n            ", "\n        "]);

    _templateObject9 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8() {
    var data = _taggedTemplateLiteral(["\n            <span class=\"icon\">\n                <i class=\"fas fa-spinner fa-pulse\"></i>\n            </span>\n            Loading please wait\n        "]);

    _templateObject8 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7() {
    var data = _taggedTemplateLiteral(["\n                        <Td data=\"", "\"/>\n                    "]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteral(["\n                <tr>\n                    ", "\n                </tr>\n                \n            "]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["\n            ", "\n        "]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["<Th data=\"", "\"/>"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["\n            <tr>\n                ", "\n            </tr>\n        "]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["", ""]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$2() {
    var data = _taggedTemplateLiteral(["", ""]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var Th = {
    "extends": 'th',
    render: function render() {
      var column = this.data.column;
      this.html(_templateObject$2(), column);
    }
  };
  var Td = {
    "extends": 'td',
    render: function render() {
      var cell = this.data.cell;
      this.html(_templateObject2(), cell);
    }
  };
  var THead = {
    "extends": 'thead',
    includes: {
      Th: Th
    },
    render: function render() {
      var columns = this.data.columns;
      this.html(_templateObject3(), columns.map(function (column) {
        return html(_templateObject4(), {
          column: column
        });
      }));
    }
  };
  var TBody = {
    "extends": 'tbody',
    includes: {
      Td: Td
    },
    render: function render() {
      var rows = this.data.rows;
      this.html(_templateObject5(), rows.map(function (row) {
        return html(_templateObject6(), Object.values(row).map(function (cell) {
          return html(_templateObject7(), {
            cell: cell
          });
        }));
      }));
    }
  };
  var Table = {
    "extends": 'table',
    includes: {
      THead: THead,
      TBody: TBody
    },
    oninit: function oninit() {
      var _this = this;

      this.setAttribute('class', 'table');
      this.state = {
        loading: true,
        rows: []
      };
      var populator = this.data.populator;
      populator().then(function (json) {
        var data = json.results;
        _this.state.loading = false;
        _this.state.columns = Object.keys(data[0]);
        _this.state.rows = data;

        _this.render();
      })["catch"](function (e) {
        return console.log('there was an error retrieving: ', e);
      });
    },
    render: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          rows = _this$state.rows,
          columns = _this$state.columns; //const { columns } = this.data;

      var loader = html(_templateObject8());
      this.html(_templateObject9(), loading ? loader : html(_templateObject10(), {
        columns: columns
      }, {
        rows: rows
      }));
    }
  };

  var userService = {
    findAll: function findAll() {
      var headers = new Headers({
        'X-Parse-Application-Id': 'A9lBJIHufJO5Bbs6Hwdxhny0IcHV5J1KFbHK9kCo',
        'X-Parse-REST-API-Key': 'yjqy3Q3oYrmS5mxE7M0bQE97R51Qj88R3Ah82ujx'
      });
      var fetchData = {
        method: 'GET',
        headers: headers
      };
      return fetch('https://parseapi.back4app.com/classes/Todo', fetchData).then(function (response) {
        return response.json();
      });
    }
  };

  function _templateObject$3() {
    var data = _taggedTemplateLiteral(["\n            <Box><Table data=\"", "\"/></Box>\n        "]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }
  var Todo = {
    includes: {
      Table: Table,
      Box: Box
    },
    "extends": 'div',
    oninit: function oninit() {
      this.setAttribute('class', 'content');
    },
    render: function render() {
      var columns = ['id', 'name', 'username'];
      this.html(_templateObject$3(), {
        columns: columns,
        populator: userService.findAll
      });
    }
  };

  var User = {
    "extends": 'input',
    oninit: function oninit() {
      if (!this.name) this.name = 'user';
    }
  };
  var Pass = {
    "extends": 'input',
    oninit: function oninit() {
      this.type = 'password';
    }
  };

  function _templateObject$4() {
    var data = _taggedTemplateLiteral(["\n    <label>Your name: <User ref=", " name=\"user\"></label>\n    <label>Your pass: <Pass ref=", " name=\"pass\"></label>\n    "]);

    _templateObject$4 = function _templateObject() {
      return data;
    };

    return data;
  }

  var Login = {
    "extends": 'form',
    includes: {
      User: User,
      Pass: Pass
    },
    oninit: function oninit() {
      // refs can be declared upfront or inline (see render)
      this.user = ref();
      this.addEventListener('submit', this);
    },
    onsubmit: function onsubmit(event) {
      event.preventDefault(); //if (validate(this.user.current, this.pass.current))
      //fetch('/log-in').then(switchPage).catch(console.error);
    },
    // render is invoked automatically on connected
    // if no connected, or callback is explicitly defined
    render: function render() {
      this.html(_templateObject$4(), this.user, ref(this, 'pass'));
    }
  };

  function _templateObject$5() {
    var data = _taggedTemplateLiteral(["\n            ", "\n        "]);

    _templateObject$5 = function _templateObject() {
      return data;
    };

    return data;
  }
  /* initialize pages here */

  var todo = define('Todo', Todo)["new"]();
  var login = define('Login', Login)["new"]();
  var Main = {
    includes: {
      Box: Box,
      Todo: Todo,
      Login: Login
    },
    "extends": 'section',
    observedAttributes: ['active-page'],
    onattributechanged: function onattributechanged() {
      this.render();
    },
    render: function render() {
      var activePage = this.getAttribute('active-page');
      var page = activePage === 'Todo' ? todo : login;
      this.html(_templateObject$5(), page);
    }
  };

  function _templateObject$6() {
    var data = _taggedTemplateLiteral(["\n            <div class=\"content has-text-centered\">\n                <p>\n                <strong>Bulma</strong> by <a href=\"https://jgthms.com\">Jeremy Thomas</a>. The source code is licensed\n                <a href=\"http://opensource.org/licenses/mit-license.php\">MIT</a>. The website content\n                is licensed <a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\">CC BY NC SA 4.0</a>.\n                </p>\n            </div>\n        "]);

    _templateObject$6 = function _templateObject() {
      return data;
    };

    return data;
  }

  var Footer = {
    "extends": 'footer',
    render: function render() {
      this.html(_templateObject$6());
    }
  };

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "@charset \"UTF-8\";\n/*! bulma.io v0.7.5 | MIT License | github.com/jgthms/bulma */\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n.tabs, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .breadcrumb, .file, .button, .is-unselectable, .modal-close, .delete {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.navbar-link:not(.is-arrowless)::after, .select:not(.is-multiple):not(.is-loading)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em;\n}\n\n.tabs:not(:last-child), .message:not(:last-child), .list:not(:last-child), .level:not(:last-child), .breadcrumb:not(:last-child), .highlight:not(:last-child), .block:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .table-container:not(:last-child), .table:not(:last-child), .progress:not(:last-child), .notification:not(:last-child), .content:not(:last-child), .box:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.modal-close, .delete {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n}\n.modal-close::before, .delete::before, .modal-close::after, .delete::after {\n  background-color: white;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n.modal-close::before, .delete::before {\n  height: 2px;\n  width: 50%;\n}\n.modal-close::after, .delete::after {\n  height: 50%;\n  width: 2px;\n}\n.modal-close:hover, .delete:hover, .modal-close:focus, .delete:focus {\n  background-color: rgba(10, 10, 10, 0.3);\n}\n.modal-close:active, .delete:active {\n  background-color: rgba(10, 10, 10, 0.4);\n}\n.is-small.modal-close, .is-small.delete {\n  height: 16px;\n  max-height: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  min-width: 16px;\n  width: 16px;\n}\n.is-medium.modal-close, .is-medium.delete {\n  height: 24px;\n  max-height: 24px;\n  max-width: 24px;\n  min-height: 24px;\n  min-width: 24px;\n  width: 24px;\n}\n.is-large.modal-close, .is-large.delete {\n  height: 32px;\n  max-height: 32px;\n  max-width: 32px;\n  min-height: 32px;\n  min-width: 32px;\n  width: 32px;\n}\n\n.control.is-loading::after, .select.is-loading::after, .loader, .button.is-loading::after {\n  animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n}\n\n.hero-video, .modal-background, .modal, .image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio, .is-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .file-cta,\n.file-name, .select select, .textarea, .input, .button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n}\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus,\n.pagination-ellipsis:focus, .file-cta:focus,\n.file-name:focus, .select select:focus, .textarea:focus, .input:focus, .button:focus, .is-focused.pagination-previous,\n.is-focused.pagination-next,\n.is-focused.pagination-link,\n.is-focused.pagination-ellipsis, .is-focused.file-cta,\n.is-focused.file-name, .select select.is-focused, .is-focused.textarea, .is-focused.input, .is-focused.button, .pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active,\n.pagination-ellipsis:active, .file-cta:active,\n.file-name:active, .select select:active, .textarea:active, .input:active, .button:active, .is-active.pagination-previous,\n.is-active.pagination-next,\n.is-active.pagination-link,\n.is-active.pagination-ellipsis, .is-active.file-cta,\n.is-active.file-name, .select select.is-active, .is-active.textarea, .is-active.input, .is-active.button {\n  outline: none;\n}\n[disabled].pagination-previous,\n[disabled].pagination-next,\n[disabled].pagination-link,\n[disabled].pagination-ellipsis, [disabled].file-cta,\n[disabled].file-name, .select select[disabled], [disabled].textarea, [disabled].input, [disabled].button, fieldset[disabled] .pagination-previous,\nfieldset[disabled] .pagination-next,\nfieldset[disabled] .pagination-link,\nfieldset[disabled] .pagination-ellipsis, fieldset[disabled] .file-cta,\nfieldset[disabled] .file-name, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .textarea, fieldset[disabled] .input, fieldset[disabled] .button {\n  cursor: not-allowed;\n}\n\n/*! minireset.css v0.0.4 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style: none;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nimg,\nembed,\niframe,\nobject,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\n\naudio {\n  max-width: 100%;\n}\n\niframe {\n  border: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\ntd:not([align]),\nth:not([align]) {\n  text-align: left;\n}\n\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: 100%;\n}\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block;\n}\n\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n}\n\nbody {\n  color: #4a4a4a;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5;\n}\n\na {\n  color: #3273dc;\n  cursor: pointer;\n  text-decoration: none;\n}\na strong {\n  color: currentColor;\n}\na:hover {\n  color: #363636;\n}\n\ncode {\n  background-color: whitesmoke;\n  color: #ff3860;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em;\n}\n\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0;\n}\n\nimg {\n  height: auto;\n  max-width: 100%;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  vertical-align: baseline;\n}\n\nsmall {\n  font-size: 0.875em;\n}\n\nspan {\n  font-style: inherit;\n  font-weight: inherit;\n}\n\nstrong {\n  color: #363636;\n  font-weight: 700;\n}\n\nfieldset {\n  border: none;\n}\n\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal;\n}\npre code {\n  background-color: transparent;\n  color: currentColor;\n  font-size: 1em;\n  padding: 0;\n}\n\ntable td,\ntable th {\n  vertical-align: top;\n}\ntable td:not([align]),\ntable th:not([align]) {\n  text-align: left;\n}\ntable th {\n  color: #363636;\n}\n\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n\n.is-pulled-left {\n  float: left !important;\n}\n\n.is-pulled-right {\n  float: right !important;\n}\n\n.is-clipped {\n  overflow: hidden !important;\n}\n\n.is-size-1 {\n  font-size: 3rem !important;\n}\n\n.is-size-2 {\n  font-size: 2.5rem !important;\n}\n\n.is-size-3 {\n  font-size: 2rem !important;\n}\n\n.is-size-4 {\n  font-size: 1.5rem !important;\n}\n\n.is-size-5 {\n  font-size: 1.25rem !important;\n}\n\n.is-size-6 {\n  font-size: 1rem !important;\n}\n\n.is-size-7 {\n  font-size: 0.75rem !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-mobile {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-mobile {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-mobile {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-mobile {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-mobile {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-mobile {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-tablet {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-tablet {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-tablet {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-tablet {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-tablet {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-tablet {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-size-1-touch {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-touch {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-touch {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-touch {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-touch {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-touch {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-touch {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-desktop {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-desktop {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-desktop {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-desktop {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-desktop {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-desktop {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-widescreen {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-widescreen {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-fullhd {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-fullhd {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important;\n  }\n}\n.has-text-centered {\n  text-align: center !important;\n}\n\n.has-text-justified {\n  text-align: justify !important;\n}\n\n.has-text-left {\n  text-align: left !important;\n}\n\n.has-text-right {\n  text-align: right !important;\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-centered-touch {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-centered-desktop {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-centered-widescreen {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-centered-fullhd {\n    text-align: center !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-justified-touch {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-justified-desktop {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-left-tablet-only {\n    text-align: left !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-left-touch {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-left-desktop {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-left-desktop-only {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-left-widescreen {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-left-fullhd {\n    text-align: left !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-right-tablet-only {\n    text-align: right !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-right-touch {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-right-desktop {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-right-desktop-only {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-right-widescreen {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-right-fullhd {\n    text-align: right !important;\n  }\n}\n.is-capitalized {\n  text-transform: capitalize !important;\n}\n\n.is-lowercase {\n  text-transform: lowercase !important;\n}\n\n.is-uppercase {\n  text-transform: uppercase !important;\n}\n\n.is-italic {\n  font-style: italic !important;\n}\n\n.has-text-white {\n  color: white !important;\n}\n\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important;\n}\n\n.has-background-white {\n  background-color: white !important;\n}\n\n.has-text-black {\n  color: #0a0a0a !important;\n}\n\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important;\n}\n\n.has-background-black {\n  background-color: #0a0a0a !important;\n}\n\n.has-text-light {\n  color: whitesmoke !important;\n}\n\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important;\n}\n\n.has-background-light {\n  background-color: whitesmoke !important;\n}\n\n.has-text-dark {\n  color: #363636 !important;\n}\n\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important;\n}\n\n.has-background-dark {\n  background-color: #363636 !important;\n}\n\n.has-text-primary {\n  color: #00d1b2 !important;\n}\n\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #009e86 !important;\n}\n\n.has-background-primary {\n  background-color: #00d1b2 !important;\n}\n\n.has-text-link {\n  color: #3273dc !important;\n}\n\na.has-text-link:hover, a.has-text-link:focus {\n  color: #205bbc !important;\n}\n\n.has-background-link {\n  background-color: #3273dc !important;\n}\n\n.has-text-info {\n  color: #209cee !important;\n}\n\na.has-text-info:hover, a.has-text-info:focus {\n  color: #0f81cc !important;\n}\n\n.has-background-info {\n  background-color: #209cee !important;\n}\n\n.has-text-success {\n  color: #23d160 !important;\n}\n\na.has-text-success:hover, a.has-text-success:focus {\n  color: #1ca64c !important;\n}\n\n.has-background-success {\n  background-color: #23d160 !important;\n}\n\n.has-text-warning {\n  color: #ffdd57 !important;\n}\n\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd324 !important;\n}\n\n.has-background-warning {\n  background-color: #ffdd57 !important;\n}\n\n.has-text-danger {\n  color: #ff3860 !important;\n}\n\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ff0537 !important;\n}\n\n.has-background-danger {\n  background-color: #ff3860 !important;\n}\n\n.has-text-black-bis {\n  color: #121212 !important;\n}\n\n.has-background-black-bis {\n  background-color: #121212 !important;\n}\n\n.has-text-black-ter {\n  color: #242424 !important;\n}\n\n.has-background-black-ter {\n  background-color: #242424 !important;\n}\n\n.has-text-grey-darker {\n  color: #363636 !important;\n}\n\n.has-background-grey-darker {\n  background-color: #363636 !important;\n}\n\n.has-text-grey-dark {\n  color: #4a4a4a !important;\n}\n\n.has-background-grey-dark {\n  background-color: #4a4a4a !important;\n}\n\n.has-text-grey {\n  color: #7a7a7a !important;\n}\n\n.has-background-grey {\n  background-color: #7a7a7a !important;\n}\n\n.has-text-grey-light {\n  color: #b5b5b5 !important;\n}\n\n.has-background-grey-light {\n  background-color: #b5b5b5 !important;\n}\n\n.has-text-grey-lighter {\n  color: #dbdbdb !important;\n}\n\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important;\n}\n\n.has-text-white-ter {\n  color: whitesmoke !important;\n}\n\n.has-background-white-ter {\n  background-color: whitesmoke !important;\n}\n\n.has-text-white-bis {\n  color: #fafafa !important;\n}\n\n.has-background-white-bis {\n  background-color: #fafafa !important;\n}\n\n.has-text-weight-light {\n  font-weight: 300 !important;\n}\n\n.has-text-weight-normal {\n  font-weight: 400 !important;\n}\n\n.has-text-weight-medium {\n  font-weight: 500 !important;\n}\n\n.has-text-weight-semibold {\n  font-weight: 600 !important;\n}\n\n.has-text-weight-bold {\n  font-weight: 700 !important;\n}\n\n.is-family-primary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-secondary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-sans-serif {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-monospace {\n  font-family: monospace !important;\n}\n\n.is-family-code {\n  font-family: monospace !important;\n}\n\n.is-block {\n  display: block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-block-tablet-only {\n    display: block !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-block-touch {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-block-desktop {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-block-desktop-only {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-block-widescreen {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-block-widescreen-only {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-block-fullhd {\n    display: block !important;\n  }\n}\n.is-flex {\n  display: flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-flex-tablet-only {\n    display: flex !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-flex-desktop {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-flex-desktop-only {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-flex-widescreen {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-flex-widescreen-only {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-flex-fullhd {\n    display: flex !important;\n  }\n}\n.is-inline {\n  display: inline !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-tablet-only {\n    display: inline !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-inline-touch {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-inline-desktop {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-desktop-only {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-inline-widescreen {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-widescreen-only {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-inline-fullhd {\n    display: inline !important;\n  }\n}\n.is-inline-block {\n  display: inline-block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-inline-block-touch {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-inline-block-desktop {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important;\n  }\n}\n.is-inline-flex {\n  display: inline-flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-flex-tablet-only {\n    display: inline-flex !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-inline-flex-touch {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-inline-flex-desktop {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-flex-desktop-only {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-inline-flex-widescreen {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-flex-widescreen-only {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-inline-flex-fullhd {\n    display: inline-flex !important;\n  }\n}\n.is-hidden {\n  display: none !important;\n}\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-hidden-tablet-only {\n    display: none !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-hidden-touch {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-hidden-desktop {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-hidden-desktop-only {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-hidden-widescreen {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-hidden-widescreen-only {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-hidden-fullhd {\n    display: none !important;\n  }\n}\n.is-invisible {\n  visibility: hidden !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-invisible-touch {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-invisible-desktop {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important;\n  }\n}\n.is-marginless {\n  margin: 0 !important;\n}\n\n.is-paddingless {\n  padding: 0 !important;\n}\n\n.is-radiusless {\n  border-radius: 0 !important;\n}\n\n.is-shadowless {\n  box-shadow: none !important;\n}\n\n.is-relative {\n  position: relative !important;\n}\n\n.box {\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem;\n}\n\na.box:hover, a.box:focus {\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;\n}\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;\n}\n\n.button {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  padding-top: calc(0.375em - 1px);\n  text-align: center;\n  white-space: nowrap;\n}\n.button strong {\n  color: inherit;\n}\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n  height: 1.5em;\n  width: 1.5em;\n}\n.button .icon:first-child:not(:last-child) {\n  margin-left: calc(-0.375em - 1px);\n  margin-right: 0.1875em;\n}\n.button .icon:last-child:not(:first-child) {\n  margin-left: 0.1875em;\n  margin-right: calc(-0.375em - 1px);\n}\n.button .icon:first-child:last-child {\n  margin-left: calc(-0.375em - 1px);\n  margin-right: calc(-0.375em - 1px);\n}\n.button:hover, .button.is-hovered {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n.button:focus, .button.is-focused {\n  border-color: #3273dc;\n  color: #363636;\n}\n.button:focus:not(:active), .button.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.button:active, .button.is-active {\n  border-color: #4a4a4a;\n  color: #363636;\n}\n.button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  color: #4a4a4a;\n  text-decoration: underline;\n}\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.button.is-text:active, .button.is-text.is-active {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.button.is-text[disabled], fieldset[disabled] .button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-white {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:hover, .button.is-white.is-hovered {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:focus, .button.is-white.is-focused {\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.button.is-white:active, .button.is-white.is-active {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white[disabled], fieldset[disabled] .button.is-white {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  color: white;\n}\n.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {\n  background-color: black;\n}\n.button.is-white.is-inverted[disabled], fieldset[disabled] .button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n  color: white;\n}\n.button.is-white.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.button.is-white.is-outlined.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-white.is-outlined[disabled], fieldset[disabled] .button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white;\n}\n.button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  color: white;\n}\n.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-white.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:hover, .button.is-black.is-hovered {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:focus, .button.is-black.is-focused {\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.button.is-black:active, .button.is-black.is-active {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black[disabled], fieldset[disabled] .button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-black.is-inverted {\n  background-color: white;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-black.is-inverted[disabled], fieldset[disabled] .button.is-black.is-inverted {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.button.is-black.is-outlined.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-black.is-outlined[disabled], fieldset[disabled] .button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {\n  background-color: white;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-black.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white;\n}\n.button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: #363636;\n}\n.button.is-light:hover, .button.is-light.is-hovered {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: #363636;\n}\n.button.is-light:focus, .button.is-light.is-focused {\n  border-color: transparent;\n  color: #363636;\n}\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.button.is-light:active, .button.is-light.is-active {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: #363636;\n}\n.button.is-light[disabled], fieldset[disabled] .button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-light.is-inverted {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {\n  background-color: #292929;\n}\n.button.is-light.is-inverted[disabled], fieldset[disabled] .button.is-light.is-inverted {\n  background-color: #363636;\n  border-color: transparent;\n  box-shadow: none;\n  color: whitesmoke;\n}\n.button.is-light.is-loading::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  color: whitesmoke;\n}\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: #363636;\n}\n.button.is-light.is-outlined.is-loading::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-light.is-outlined[disabled], fieldset[disabled] .button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  color: #363636;\n}\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-light.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  box-shadow: none;\n  color: #363636;\n}\n.button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  color: whitesmoke;\n}\n.button.is-dark:hover, .button.is-dark.is-hovered {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: whitesmoke;\n}\n.button.is-dark:focus, .button.is-dark.is-focused {\n  border-color: transparent;\n  color: whitesmoke;\n}\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.button.is-dark:active, .button.is-dark.is-active {\n  background-color: #292929;\n  border-color: transparent;\n  color: whitesmoke;\n}\n.button.is-dark[disabled], fieldset[disabled] .button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-dark.is-inverted {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {\n  background-color: #e8e8e8;\n}\n.button.is-dark.is-inverted[disabled], fieldset[disabled] .button.is-dark.is-inverted {\n  background-color: whitesmoke;\n  border-color: transparent;\n  box-shadow: none;\n  color: #363636;\n}\n.button.is-dark.is-loading::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  color: #363636;\n}\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {\n  background-color: #363636;\n  border-color: #363636;\n  color: whitesmoke;\n}\n.button.is-dark.is-outlined.is-loading::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-dark.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  box-shadow: none;\n  color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  color: whitesmoke;\n}\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-dark.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: whitesmoke;\n}\n.button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:hover, .button.is-primary.is-hovered {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:focus, .button.is-primary.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n.button.is-primary:active, .button.is-primary.is-active {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary[disabled], fieldset[disabled] .button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-primary.is-inverted {\n  background-color: #fff;\n  color: #00d1b2;\n}\n.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-primary.is-inverted[disabled], fieldset[disabled] .button.is-primary.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #00d1b2;\n}\n.button.is-primary.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  color: #00d1b2;\n}\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff;\n}\n.button.is-primary.is-outlined.is-loading::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important;\n}\n.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-primary.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  box-shadow: none;\n  color: #00d1b2;\n}\n.button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #00d1b2;\n}\n.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important;\n}\n.button.is-primary.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-link {\n  background-color: #3273dc;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:hover, .button.is-link.is-hovered {\n  background-color: #276cda;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:focus, .button.is-link.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.button.is-link:active, .button.is-link.is-active {\n  background-color: #2366d1;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link[disabled], fieldset[disabled] .button.is-link {\n  background-color: #3273dc;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-link.is-inverted {\n  background-color: #fff;\n  color: #3273dc;\n}\n.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-link.is-inverted[disabled], fieldset[disabled] .button.is-link.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #3273dc;\n}\n.button.is-link.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #3273dc;\n  color: #3273dc;\n}\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n.button.is-link.is-outlined.is-loading::after {\n  border-color: transparent transparent #3273dc #3273dc !important;\n}\n.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-link.is-outlined[disabled], fieldset[disabled] .button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #3273dc;\n  box-shadow: none;\n  color: #3273dc;\n}\n.button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #3273dc;\n}\n.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #3273dc #3273dc !important;\n}\n.button.is-link.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-info {\n  background-color: #209cee;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:hover, .button.is-info.is-hovered {\n  background-color: #1496ed;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:focus, .button.is-info.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n}\n.button.is-info:active, .button.is-info.is-active {\n  background-color: #118fe4;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info[disabled], fieldset[disabled] .button.is-info {\n  background-color: #209cee;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-info.is-inverted {\n  background-color: #fff;\n  color: #209cee;\n}\n.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-info.is-inverted[disabled], fieldset[disabled] .button.is-info.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #209cee;\n}\n.button.is-info.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #209cee;\n  color: #209cee;\n}\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {\n  background-color: #209cee;\n  border-color: #209cee;\n  color: #fff;\n}\n.button.is-info.is-outlined.is-loading::after {\n  border-color: transparent transparent #209cee #209cee !important;\n}\n.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-info.is-outlined[disabled], fieldset[disabled] .button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #209cee;\n  box-shadow: none;\n  color: #209cee;\n}\n.button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #209cee;\n}\n.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #209cee #209cee !important;\n}\n.button.is-info.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-success {\n  background-color: #23d160;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:hover, .button.is-success.is-hovered {\n  background-color: #22c65b;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:focus, .button.is-success.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n}\n.button.is-success:active, .button.is-success.is-active {\n  background-color: #20bc56;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success[disabled], fieldset[disabled] .button.is-success {\n  background-color: #23d160;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-success.is-inverted {\n  background-color: #fff;\n  color: #23d160;\n}\n.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-success.is-inverted[disabled], fieldset[disabled] .button.is-success.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #23d160;\n}\n.button.is-success.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #23d160;\n  color: #23d160;\n}\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {\n  background-color: #23d160;\n  border-color: #23d160;\n  color: #fff;\n}\n.button.is-success.is-outlined.is-loading::after {\n  border-color: transparent transparent #23d160 #23d160 !important;\n}\n.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-success.is-outlined[disabled], fieldset[disabled] .button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #23d160;\n  box-shadow: none;\n  color: #23d160;\n}\n.button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #23d160;\n}\n.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #23d160 #23d160 !important;\n}\n.button.is-success.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-warning {\n  background-color: #ffdd57;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:hover, .button.is-warning.is-hovered {\n  background-color: #ffdb4a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus, .button.is-warning.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n.button.is-warning:active, .button.is-warning.is-active {\n  background-color: #ffd83d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning[disabled], fieldset[disabled] .button.is-warning {\n  background-color: #ffdd57;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffdd57;\n}\n.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted[disabled], fieldset[disabled] .button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: #ffdd57;\n}\n.button.is-warning.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffdd57;\n  color: #ffdd57;\n}\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {\n  background-color: #ffdd57;\n  border-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-outlined.is-loading::after {\n  border-color: transparent transparent #ffdd57 #ffdd57 !important;\n}\n.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-warning.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffdd57;\n  box-shadow: none;\n  color: #ffdd57;\n}\n.button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffdd57;\n}\n.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #ffdd57 #ffdd57 !important;\n}\n.button.is-warning.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-danger {\n  background-color: #ff3860;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:hover, .button.is-danger.is-hovered {\n  background-color: #ff2b56;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:focus, .button.is-danger.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n}\n.button.is-danger:active, .button.is-danger.is-active {\n  background-color: #ff1f4b;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger[disabled], fieldset[disabled] .button.is-danger {\n  background-color: #ff3860;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-danger.is-inverted {\n  background-color: #fff;\n  color: #ff3860;\n}\n.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-danger.is-inverted[disabled], fieldset[disabled] .button.is-danger.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #ff3860;\n}\n.button.is-danger.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #ff3860;\n  color: #ff3860;\n}\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {\n  background-color: #ff3860;\n  border-color: #ff3860;\n  color: #fff;\n}\n.button.is-danger.is-outlined.is-loading::after {\n  border-color: transparent transparent #ff3860 #ff3860 !important;\n}\n.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-danger.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #ff3860;\n  box-shadow: none;\n  color: #ff3860;\n}\n.button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #ff3860;\n}\n.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #ff3860 #ff3860 !important;\n}\n.button.is-danger.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.button.is-normal {\n  font-size: 1rem;\n}\n.button.is-medium {\n  font-size: 1.25rem;\n}\n.button.is-large {\n  font-size: 1.5rem;\n}\n.button[disabled], fieldset[disabled] .button {\n  background-color: white;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  opacity: 0.5;\n}\n.button.is-fullwidth {\n  display: flex;\n  width: 100%;\n}\n.button.is-loading {\n  color: transparent !important;\n  pointer-events: none;\n}\n.button.is-loading::after {\n  position: absolute;\n  left: calc(50% - (1em / 2));\n  top: calc(50% - (1em / 2));\n  position: absolute !important;\n}\n.button.is-static {\n  background-color: whitesmoke;\n  border-color: #dbdbdb;\n  color: #7a7a7a;\n  box-shadow: none;\n  pointer-events: none;\n}\n.button.is-rounded {\n  border-radius: 290486px;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.buttons .button {\n  margin-bottom: 0.5rem;\n}\n.buttons .button:not(:last-child):not(.is-fullwidth) {\n  margin-right: 0.5rem;\n}\n.buttons:last-child {\n  margin-bottom: -0.5rem;\n}\n.buttons:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {\n  font-size: 1.25rem;\n}\n.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {\n  font-size: 1.5rem;\n}\n.buttons.has-addons .button:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.buttons.has-addons .button:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  margin-right: -1px;\n}\n.buttons.has-addons .button:last-child {\n  margin-right: 0;\n}\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n  z-index: 2;\n}\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n  z-index: 3;\n}\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n  z-index: 4;\n}\n.buttons.has-addons .button.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.buttons.is-centered {\n  justify-content: center;\n}\n.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.buttons.is-right {\n  justify-content: flex-end;\n}\n.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.container {\n  flex-grow: 1;\n  margin: 0 auto;\n  position: relative;\n  width: auto;\n}\n@media screen and (min-width: 1024px) {\n  .container {\n    max-width: 960px;\n  }\n  .container.is-fluid {\n    margin-left: 32px;\n    margin-right: 32px;\n    max-width: none;\n  }\n}\n@media screen and (max-width: 1215px) {\n  .container.is-widescreen {\n    max-width: 1152px;\n  }\n}\n@media screen and (max-width: 1407px) {\n  .container.is-fullhd {\n    max-width: 1344px;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .container {\n    max-width: 1152px;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .container {\n    max-width: 1344px;\n  }\n}\n\n.content li + li {\n  margin-top: 0.25em;\n}\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em;\n}\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em;\n}\n.content h1:not(:first-child) {\n  margin-top: 1em;\n}\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em;\n}\n.content h2:not(:first-child) {\n  margin-top: 1.1428em;\n}\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em;\n}\n.content h3:not(:first-child) {\n  margin-top: 1.3333em;\n}\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em;\n}\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em;\n}\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em;\n}\n.content ol {\n  list-style-position: outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ol:not([type]) {\n  list-style-type: decimal;\n}\n.content ol:not([type]).is-lower-alpha {\n  list-style-type: lower-alpha;\n}\n.content ol:not([type]).is-lower-roman {\n  list-style-type: lower-roman;\n}\n.content ol:not([type]).is-upper-alpha {\n  list-style-type: upper-alpha;\n}\n.content ol:not([type]).is-upper-roman {\n  list-style-type: upper-roman;\n}\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ul ul {\n  list-style-type: circle;\n  margin-top: 0.5em;\n}\n.content ul ul ul {\n  list-style-type: square;\n}\n.content dd {\n  margin-left: 2em;\n}\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center;\n}\n.content figure:not(:first-child) {\n  margin-top: 2em;\n}\n.content figure:not(:last-child) {\n  margin-bottom: 2em;\n}\n.content figure img {\n  display: inline-block;\n}\n.content figure figcaption {\n  font-style: italic;\n}\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n}\n.content sup,\n.content sub {\n  font-size: 75%;\n}\n.content table {\n  width: 100%;\n}\n.content table td,\n.content table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n.content table th {\n  color: #363636;\n}\n.content table th:not([align]) {\n  text-align: left;\n}\n.content table thead td,\n.content table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n.content table tfoot td,\n.content table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n.content table tbody tr:last-child td,\n.content table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n.content .tabs li + li {\n  margin-top: 0;\n}\n.content.is-small {\n  font-size: 0.75rem;\n}\n.content.is-medium {\n  font-size: 1.25rem;\n}\n.content.is-large {\n  font-size: 1.5rem;\n}\n\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.icon.is-small {\n  height: 1rem;\n  width: 1rem;\n}\n.icon.is-medium {\n  height: 2rem;\n  width: 2rem;\n}\n.icon.is-large {\n  height: 3rem;\n  width: 3rem;\n}\n\n.image {\n  display: block;\n  position: relative;\n}\n.image img {\n  display: block;\n  height: auto;\n  width: 100%;\n}\n.image img.is-rounded {\n  border-radius: 290486px;\n}\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio {\n  height: 100%;\n  width: 100%;\n}\n.image.is-square, .image.is-1by1 {\n  padding-top: 100%;\n}\n.image.is-5by4 {\n  padding-top: 80%;\n}\n.image.is-4by3 {\n  padding-top: 75%;\n}\n.image.is-3by2 {\n  padding-top: 66.6666%;\n}\n.image.is-5by3 {\n  padding-top: 60%;\n}\n.image.is-16by9 {\n  padding-top: 56.25%;\n}\n.image.is-2by1 {\n  padding-top: 50%;\n}\n.image.is-3by1 {\n  padding-top: 33.3333%;\n}\n.image.is-4by5 {\n  padding-top: 125%;\n}\n.image.is-3by4 {\n  padding-top: 133.3333%;\n}\n.image.is-2by3 {\n  padding-top: 150%;\n}\n.image.is-3by5 {\n  padding-top: 166.6666%;\n}\n.image.is-9by16 {\n  padding-top: 177.7777%;\n}\n.image.is-1by2 {\n  padding-top: 200%;\n}\n.image.is-1by3 {\n  padding-top: 300%;\n}\n.image.is-16x16 {\n  height: 16px;\n  width: 16px;\n}\n.image.is-24x24 {\n  height: 24px;\n  width: 24px;\n}\n.image.is-32x32 {\n  height: 32px;\n  width: 32px;\n}\n.image.is-48x48 {\n  height: 48px;\n  width: 48px;\n}\n.image.is-64x64 {\n  height: 64px;\n  width: 64px;\n}\n.image.is-96x96 {\n  height: 96px;\n  width: 96px;\n}\n.image.is-128x128 {\n  height: 128px;\n  width: 128px;\n}\n\n.notification {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n  position: relative;\n}\n.notification a:not(.button):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n.notification strong {\n  color: currentColor;\n}\n.notification code,\n.notification pre {\n  background: white;\n}\n.notification pre code {\n  background: transparent;\n}\n.notification > .delete {\n  position: absolute;\n  right: 0.5rem;\n  top: 0.5rem;\n}\n.notification .title,\n.notification .subtitle,\n.notification .content {\n  color: currentColor;\n}\n.notification.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.notification.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.notification.is-light {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.notification.is-dark {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.notification.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.notification.is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n.notification.is-info {\n  background-color: #209cee;\n  color: #fff;\n}\n.notification.is-success {\n  background-color: #23d160;\n  color: #fff;\n}\n.notification.is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.notification.is-danger {\n  background-color: #ff3860;\n  color: #fff;\n}\n\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n}\n.progress::-webkit-progress-bar {\n  background-color: #dbdbdb;\n}\n.progress::-webkit-progress-value {\n  background-color: #4a4a4a;\n}\n.progress::-moz-progress-bar {\n  background-color: #4a4a4a;\n}\n.progress::-ms-fill {\n  background-color: #4a4a4a;\n  border: none;\n}\n.progress.is-white::-webkit-progress-value {\n  background-color: white;\n}\n.progress.is-white::-moz-progress-bar {\n  background-color: white;\n}\n.progress.is-white::-ms-fill {\n  background-color: white;\n}\n.progress.is-white:indeterminate {\n  background-image: linear-gradient(to right, white 30%, #dbdbdb 30%);\n}\n.progress.is-black::-webkit-progress-value {\n  background-color: #0a0a0a;\n}\n.progress.is-black::-moz-progress-bar {\n  background-color: #0a0a0a;\n}\n.progress.is-black::-ms-fill {\n  background-color: #0a0a0a;\n}\n.progress.is-black:indeterminate {\n  background-image: linear-gradient(to right, #0a0a0a 30%, #dbdbdb 30%);\n}\n.progress.is-light::-webkit-progress-value {\n  background-color: whitesmoke;\n}\n.progress.is-light::-moz-progress-bar {\n  background-color: whitesmoke;\n}\n.progress.is-light::-ms-fill {\n  background-color: whitesmoke;\n}\n.progress.is-light:indeterminate {\n  background-image: linear-gradient(to right, whitesmoke 30%, #dbdbdb 30%);\n}\n.progress.is-dark::-webkit-progress-value {\n  background-color: #363636;\n}\n.progress.is-dark::-moz-progress-bar {\n  background-color: #363636;\n}\n.progress.is-dark::-ms-fill {\n  background-color: #363636;\n}\n.progress.is-dark:indeterminate {\n  background-image: linear-gradient(to right, #363636 30%, #dbdbdb 30%);\n}\n.progress.is-primary::-webkit-progress-value {\n  background-color: #00d1b2;\n}\n.progress.is-primary::-moz-progress-bar {\n  background-color: #00d1b2;\n}\n.progress.is-primary::-ms-fill {\n  background-color: #00d1b2;\n}\n.progress.is-primary:indeterminate {\n  background-image: linear-gradient(to right, #00d1b2 30%, #dbdbdb 30%);\n}\n.progress.is-link::-webkit-progress-value {\n  background-color: #3273dc;\n}\n.progress.is-link::-moz-progress-bar {\n  background-color: #3273dc;\n}\n.progress.is-link::-ms-fill {\n  background-color: #3273dc;\n}\n.progress.is-link:indeterminate {\n  background-image: linear-gradient(to right, #3273dc 30%, #dbdbdb 30%);\n}\n.progress.is-info::-webkit-progress-value {\n  background-color: #209cee;\n}\n.progress.is-info::-moz-progress-bar {\n  background-color: #209cee;\n}\n.progress.is-info::-ms-fill {\n  background-color: #209cee;\n}\n.progress.is-info:indeterminate {\n  background-image: linear-gradient(to right, #209cee 30%, #dbdbdb 30%);\n}\n.progress.is-success::-webkit-progress-value {\n  background-color: #23d160;\n}\n.progress.is-success::-moz-progress-bar {\n  background-color: #23d160;\n}\n.progress.is-success::-ms-fill {\n  background-color: #23d160;\n}\n.progress.is-success:indeterminate {\n  background-image: linear-gradient(to right, #23d160 30%, #dbdbdb 30%);\n}\n.progress.is-warning::-webkit-progress-value {\n  background-color: #ffdd57;\n}\n.progress.is-warning::-moz-progress-bar {\n  background-color: #ffdd57;\n}\n.progress.is-warning::-ms-fill {\n  background-color: #ffdd57;\n}\n.progress.is-warning:indeterminate {\n  background-image: linear-gradient(to right, #ffdd57 30%, #dbdbdb 30%);\n}\n.progress.is-danger::-webkit-progress-value {\n  background-color: #ff3860;\n}\n.progress.is-danger::-moz-progress-bar {\n  background-color: #ff3860;\n}\n.progress.is-danger::-ms-fill {\n  background-color: #ff3860;\n}\n.progress.is-danger:indeterminate {\n  background-image: linear-gradient(to right, #ff3860 30%, #dbdbdb 30%);\n}\n.progress:indeterminate {\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n  animation-name: moveIndeterminate;\n  animation-timing-function: linear;\n  background-color: #dbdbdb;\n  background-image: linear-gradient(to right, #4a4a4a 30%, #dbdbdb 30%);\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: 150% 150%;\n}\n.progress:indeterminate::-webkit-progress-bar {\n  background-color: transparent;\n}\n.progress:indeterminate::-moz-progress-bar {\n  background-color: transparent;\n}\n.progress.is-small {\n  height: 0.75rem;\n}\n.progress.is-medium {\n  height: 1.25rem;\n}\n.progress.is-large {\n  height: 1.5rem;\n}\n\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n.table {\n  background-color: white;\n  color: #363636;\n}\n.table td,\n.table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n.table td.is-white,\n.table th.is-white {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.table td.is-black,\n.table th.is-black {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.table td.is-light,\n.table th.is-light {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: #363636;\n}\n.table td.is-dark,\n.table th.is-dark {\n  background-color: #363636;\n  border-color: #363636;\n  color: whitesmoke;\n}\n.table td.is-primary,\n.table th.is-primary {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff;\n}\n.table td.is-link,\n.table th.is-link {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n.table td.is-info,\n.table th.is-info {\n  background-color: #209cee;\n  border-color: #209cee;\n  color: #fff;\n}\n.table td.is-success,\n.table th.is-success {\n  background-color: #23d160;\n  border-color: #23d160;\n  color: #fff;\n}\n.table td.is-warning,\n.table th.is-warning {\n  background-color: #ffdd57;\n  border-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.table td.is-danger,\n.table th.is-danger {\n  background-color: #ff3860;\n  border-color: #ff3860;\n  color: #fff;\n}\n.table td.is-narrow,\n.table th.is-narrow {\n  white-space: nowrap;\n  width: 1%;\n}\n.table td.is-selected,\n.table th.is-selected {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.table td.is-selected a,\n.table td.is-selected strong,\n.table th.is-selected a,\n.table th.is-selected strong {\n  color: currentColor;\n}\n.table th {\n  color: #363636;\n}\n.table th:not([align]) {\n  text-align: left;\n}\n.table tr.is-selected {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.table tr.is-selected a,\n.table tr.is-selected strong {\n  color: currentColor;\n}\n.table tr.is-selected td,\n.table tr.is-selected th {\n  border-color: #fff;\n  color: currentColor;\n}\n.table thead {\n  background-color: transparent;\n}\n.table thead td,\n.table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n.table tfoot {\n  background-color: transparent;\n}\n.table tfoot td,\n.table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n.table tbody {\n  background-color: transparent;\n}\n.table tbody tr:last-child td,\n.table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n.table.is-bordered td,\n.table.is-bordered th {\n  border-width: 1px;\n}\n.table.is-bordered tr:last-child td,\n.table.is-bordered tr:last-child th {\n  border-bottom-width: 1px;\n}\n.table.is-fullwidth {\n  width: 100%;\n}\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {\n  background-color: whitesmoke;\n}\n.table.is-narrow td,\n.table.is-narrow th {\n  padding: 0.25em 0.5em;\n}\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n  background-color: #fafafa;\n}\n\n.table-container {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n}\n\n.tags {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.tags .tag {\n  margin-bottom: 0.5rem;\n}\n.tags .tag:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.tags:last-child {\n  margin-bottom: -0.5rem;\n}\n.tags:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.tags.are-medium .tag:not(.is-normal):not(.is-large) {\n  font-size: 1rem;\n}\n.tags.are-large .tag:not(.is-normal):not(.is-medium) {\n  font-size: 1.25rem;\n}\n.tags.is-centered {\n  justify-content: center;\n}\n.tags.is-centered .tag {\n  margin-right: 0.25rem;\n  margin-left: 0.25rem;\n}\n.tags.is-right {\n  justify-content: flex-end;\n}\n.tags.is-right .tag:not(:first-child) {\n  margin-left: 0.5rem;\n}\n.tags.is-right .tag:not(:last-child) {\n  margin-right: 0;\n}\n.tags.has-addons .tag {\n  margin-right: 0;\n}\n.tags.has-addons .tag:not(:first-child) {\n  margin-left: 0;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.tags.has-addons .tag:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.tag:not(body) {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #4a4a4a;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n.tag:not(body) .delete {\n  margin-left: 0.25rem;\n  margin-right: -0.375rem;\n}\n.tag:not(body).is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.tag:not(body).is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.tag:not(body).is-light {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.tag:not(body).is-dark {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.tag:not(body).is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.tag:not(body).is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n.tag:not(body).is-info {\n  background-color: #209cee;\n  color: #fff;\n}\n.tag:not(body).is-success {\n  background-color: #23d160;\n  color: #fff;\n}\n.tag:not(body).is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.tag:not(body).is-danger {\n  background-color: #ff3860;\n  color: #fff;\n}\n.tag:not(body).is-normal {\n  font-size: 0.75rem;\n}\n.tag:not(body).is-medium {\n  font-size: 1rem;\n}\n.tag:not(body).is-large {\n  font-size: 1.25rem;\n}\n.tag:not(body) .icon:first-child:not(:last-child) {\n  margin-left: -0.375em;\n  margin-right: 0.1875em;\n}\n.tag:not(body) .icon:last-child:not(:first-child) {\n  margin-left: 0.1875em;\n  margin-right: -0.375em;\n}\n.tag:not(body) .icon:first-child:last-child {\n  margin-left: -0.375em;\n  margin-right: -0.375em;\n}\n.tag:not(body).is-delete {\n  margin-left: 1px;\n  padding: 0;\n  position: relative;\n  width: 2em;\n}\n.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {\n  background-color: currentColor;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n.tag:not(body).is-delete::before {\n  height: 1px;\n  width: 50%;\n}\n.tag:not(body).is-delete::after {\n  height: 50%;\n  width: 1px;\n}\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n  background-color: #e8e8e8;\n}\n.tag:not(body).is-delete:active {\n  background-color: #dbdbdb;\n}\n.tag:not(body).is-rounded {\n  border-radius: 290486px;\n}\n\na.tag:hover {\n  text-decoration: underline;\n}\n\n.title,\n.subtitle {\n  word-break: break-word;\n}\n.title em,\n.title span,\n.subtitle em,\n.subtitle span {\n  font-weight: inherit;\n}\n.title sub,\n.subtitle sub {\n  font-size: 0.75em;\n}\n.title sup,\n.subtitle sup {\n  font-size: 0.75em;\n}\n.title .tag,\n.subtitle .tag {\n  vertical-align: middle;\n}\n\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.title strong {\n  color: inherit;\n  font-weight: inherit;\n}\n.title + .highlight {\n  margin-top: -0.75rem;\n}\n.title:not(.is-spaced) + .subtitle {\n  margin-top: -1.25rem;\n}\n.title.is-1 {\n  font-size: 3rem;\n}\n.title.is-2 {\n  font-size: 2.5rem;\n}\n.title.is-3 {\n  font-size: 2rem;\n}\n.title.is-4 {\n  font-size: 1.5rem;\n}\n.title.is-5 {\n  font-size: 1.25rem;\n}\n.title.is-6 {\n  font-size: 1rem;\n}\n.title.is-7 {\n  font-size: 0.75rem;\n}\n\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25;\n}\n.subtitle strong {\n  color: #363636;\n  font-weight: 600;\n}\n.subtitle:not(.is-spaced) + .title {\n  margin-top: -1.25rem;\n}\n.subtitle.is-1 {\n  font-size: 3rem;\n}\n.subtitle.is-2 {\n  font-size: 2.5rem;\n}\n.subtitle.is-3 {\n  font-size: 2rem;\n}\n.subtitle.is-4 {\n  font-size: 1.5rem;\n}\n.subtitle.is-5 {\n  font-size: 1.25rem;\n}\n.subtitle.is-6 {\n  font-size: 1rem;\n}\n.subtitle.is-7 {\n  font-size: 0.75rem;\n}\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.highlight {\n  font-weight: 400;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0;\n}\n.highlight pre {\n  overflow: auto;\n  max-width: 100%;\n}\n\n.number {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 290486px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top;\n}\n\n.select select, .textarea, .input {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  color: #363636;\n}\n.select select::-moz-placeholder, .textarea::-moz-placeholder, .input::-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .input::-webkit-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:-moz-placeholder, .textarea:-moz-placeholder, .input:-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:-ms-input-placeholder, .textarea:-ms-input-placeholder, .input:-ms-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:hover, .textarea:hover, .input:hover, .select select.is-hovered, .is-hovered.textarea, .is-hovered.input {\n  border-color: #b5b5b5;\n}\n.select select:focus, .textarea:focus, .input:focus, .select select.is-focused, .is-focused.textarea, .is-focused.input, .select select:active, .textarea:active, .input:active, .select select.is-active, .is-active.textarea, .is-active.input {\n  border-color: #3273dc;\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.select select[disabled], [disabled].textarea, [disabled].input, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .textarea, fieldset[disabled] .input {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: #7a7a7a;\n}\n.select select[disabled]::-moz-placeholder, [disabled].textarea::-moz-placeholder, [disabled].input::-moz-placeholder, fieldset[disabled] .select select::-moz-placeholder, .select fieldset[disabled] select::-moz-placeholder, fieldset[disabled] .textarea::-moz-placeholder, fieldset[disabled] .input::-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]::-webkit-input-placeholder, [disabled].textarea::-webkit-input-placeholder, [disabled].input::-webkit-input-placeholder, fieldset[disabled] .select select::-webkit-input-placeholder, .select fieldset[disabled] select::-webkit-input-placeholder, fieldset[disabled] .textarea::-webkit-input-placeholder, fieldset[disabled] .input::-webkit-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-moz-placeholder, [disabled].textarea:-moz-placeholder, [disabled].input:-moz-placeholder, fieldset[disabled] .select select:-moz-placeholder, .select fieldset[disabled] select:-moz-placeholder, fieldset[disabled] .textarea:-moz-placeholder, fieldset[disabled] .input:-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-ms-input-placeholder, [disabled].textarea:-ms-input-placeholder, [disabled].input:-ms-input-placeholder, fieldset[disabled] .select select:-ms-input-placeholder, .select fieldset[disabled] select:-ms-input-placeholder, fieldset[disabled] .textarea:-ms-input-placeholder, fieldset[disabled] .input:-ms-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.textarea, .input {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  width: 100%;\n}\n[readonly].textarea, [readonly].input {\n  box-shadow: none;\n}\n.is-white.textarea, .is-white.input {\n  border-color: white;\n}\n.is-white.textarea:focus, .is-white.input:focus, .is-white.is-focused.textarea, .is-white.is-focused.input, .is-white.textarea:active, .is-white.input:active, .is-white.is-active.textarea, .is-white.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.is-black.textarea, .is-black.input {\n  border-color: #0a0a0a;\n}\n.is-black.textarea:focus, .is-black.input:focus, .is-black.is-focused.textarea, .is-black.is-focused.input, .is-black.textarea:active, .is-black.input:active, .is-black.is-active.textarea, .is-black.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.is-light.textarea, .is-light.input {\n  border-color: whitesmoke;\n}\n.is-light.textarea:focus, .is-light.input:focus, .is-light.is-focused.textarea, .is-light.is-focused.input, .is-light.textarea:active, .is-light.input:active, .is-light.is-active.textarea, .is-light.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.is-dark.textarea, .is-dark.input {\n  border-color: #363636;\n}\n.is-dark.textarea:focus, .is-dark.input:focus, .is-dark.is-focused.textarea, .is-dark.is-focused.input, .is-dark.textarea:active, .is-dark.input:active, .is-dark.is-active.textarea, .is-dark.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.is-primary.textarea, .is-primary.input {\n  border-color: #00d1b2;\n}\n.is-primary.textarea:focus, .is-primary.input:focus, .is-primary.is-focused.textarea, .is-primary.is-focused.input, .is-primary.textarea:active, .is-primary.input:active, .is-primary.is-active.textarea, .is-primary.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n.is-link.textarea, .is-link.input {\n  border-color: #3273dc;\n}\n.is-link.textarea:focus, .is-link.input:focus, .is-link.is-focused.textarea, .is-link.is-focused.input, .is-link.textarea:active, .is-link.input:active, .is-link.is-active.textarea, .is-link.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.is-info.textarea, .is-info.input {\n  border-color: #209cee;\n}\n.is-info.textarea:focus, .is-info.input:focus, .is-info.is-focused.textarea, .is-info.is-focused.input, .is-info.textarea:active, .is-info.input:active, .is-info.is-active.textarea, .is-info.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n}\n.is-success.textarea, .is-success.input {\n  border-color: #23d160;\n}\n.is-success.textarea:focus, .is-success.input:focus, .is-success.is-focused.textarea, .is-success.is-focused.input, .is-success.textarea:active, .is-success.input:active, .is-success.is-active.textarea, .is-success.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n}\n.is-warning.textarea, .is-warning.input {\n  border-color: #ffdd57;\n}\n.is-warning.textarea:focus, .is-warning.input:focus, .is-warning.is-focused.textarea, .is-warning.is-focused.input, .is-warning.textarea:active, .is-warning.input:active, .is-warning.is-active.textarea, .is-warning.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n.is-danger.textarea, .is-danger.input {\n  border-color: #ff3860;\n}\n.is-danger.textarea:focus, .is-danger.input:focus, .is-danger.is-focused.textarea, .is-danger.is-focused.input, .is-danger.textarea:active, .is-danger.input:active, .is-danger.is-active.textarea, .is-danger.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n}\n.is-small.textarea, .is-small.input {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.is-medium.textarea, .is-medium.input {\n  font-size: 1.25rem;\n}\n.is-large.textarea, .is-large.input {\n  font-size: 1.5rem;\n}\n.is-fullwidth.textarea, .is-fullwidth.input {\n  display: block;\n  width: 100%;\n}\n.is-inline.textarea, .is-inline.input {\n  display: inline;\n  width: auto;\n}\n\n.input.is-rounded {\n  border-radius: 290486px;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: 0.625em;\n  resize: vertical;\n}\n.textarea:not([rows]) {\n  max-height: 600px;\n  min-height: 120px;\n}\n.textarea[rows] {\n  height: initial;\n}\n.textarea.has-fixed-size {\n  resize: none;\n}\n\n.radio, .checkbox {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative;\n}\n.radio input, .checkbox input {\n  cursor: pointer;\n}\n.radio:hover, .checkbox:hover {\n  color: #363636;\n}\n[disabled].radio, [disabled].checkbox, fieldset[disabled] .radio, fieldset[disabled] .checkbox {\n  color: #7a7a7a;\n  cursor: not-allowed;\n}\n\n.radio + .radio {\n  margin-left: 0.5em;\n}\n\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n}\n.select:not(.is-multiple) {\n  height: 2.25em;\n}\n.select:not(.is-multiple):not(.is-loading)::after {\n  border-color: #3273dc;\n  right: 1.125em;\n  z-index: 4;\n}\n.select.is-rounded select {\n  border-radius: 290486px;\n  padding-left: 1em;\n}\n.select select {\n  cursor: pointer;\n  display: block;\n  font-size: 1em;\n  max-width: 100%;\n  outline: none;\n}\n.select select::-ms-expand {\n  display: none;\n}\n.select select[disabled]:hover, fieldset[disabled] .select select:hover {\n  border-color: whitesmoke;\n}\n.select select:not([multiple]) {\n  padding-right: 2.5em;\n}\n.select select[multiple] {\n  height: auto;\n  padding: 0;\n}\n.select select[multiple] option {\n  padding: 0.5em 1em;\n}\n.select:not(.is-multiple):not(.is-loading):hover::after {\n  border-color: #363636;\n}\n.select.is-white:not(:hover)::after {\n  border-color: white;\n}\n.select.is-white select {\n  border-color: white;\n}\n.select.is-white select:hover, .select.is-white select.is-hovered {\n  border-color: #f2f2f2;\n}\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.select.is-black:not(:hover)::after {\n  border-color: #0a0a0a;\n}\n.select.is-black select {\n  border-color: #0a0a0a;\n}\n.select.is-black select:hover, .select.is-black select.is-hovered {\n  border-color: black;\n}\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.select.is-light:not(:hover)::after {\n  border-color: whitesmoke;\n}\n.select.is-light select {\n  border-color: whitesmoke;\n}\n.select.is-light select:hover, .select.is-light select.is-hovered {\n  border-color: #e8e8e8;\n}\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.select.is-dark:not(:hover)::after {\n  border-color: #363636;\n}\n.select.is-dark select {\n  border-color: #363636;\n}\n.select.is-dark select:hover, .select.is-dark select.is-hovered {\n  border-color: #292929;\n}\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.select.is-primary:not(:hover)::after {\n  border-color: #00d1b2;\n}\n.select.is-primary select {\n  border-color: #00d1b2;\n}\n.select.is-primary select:hover, .select.is-primary select.is-hovered {\n  border-color: #00b89c;\n}\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n.select.is-link:not(:hover)::after {\n  border-color: #3273dc;\n}\n.select.is-link select {\n  border-color: #3273dc;\n}\n.select.is-link select:hover, .select.is-link select.is-hovered {\n  border-color: #2366d1;\n}\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.select.is-info:not(:hover)::after {\n  border-color: #209cee;\n}\n.select.is-info select {\n  border-color: #209cee;\n}\n.select.is-info select:hover, .select.is-info select.is-hovered {\n  border-color: #118fe4;\n}\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n}\n.select.is-success:not(:hover)::after {\n  border-color: #23d160;\n}\n.select.is-success select {\n  border-color: #23d160;\n}\n.select.is-success select:hover, .select.is-success select.is-hovered {\n  border-color: #20bc56;\n}\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n}\n.select.is-warning:not(:hover)::after {\n  border-color: #ffdd57;\n}\n.select.is-warning select {\n  border-color: #ffdd57;\n}\n.select.is-warning select:hover, .select.is-warning select.is-hovered {\n  border-color: #ffd83d;\n}\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n.select.is-danger:not(:hover)::after {\n  border-color: #ff3860;\n}\n.select.is-danger select {\n  border-color: #ff3860;\n}\n.select.is-danger select:hover, .select.is-danger select.is-hovered {\n  border-color: #ff1f4b;\n}\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n}\n.select.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.select.is-medium {\n  font-size: 1.25rem;\n}\n.select.is-large {\n  font-size: 1.5rem;\n}\n.select.is-disabled::after {\n  border-color: #7a7a7a;\n}\n.select.is-fullwidth {\n  width: 100%;\n}\n.select.is-fullwidth select {\n  width: 100%;\n}\n.select.is-loading::after {\n  margin-top: 0;\n  position: absolute;\n  right: 0.625em;\n  top: 0.625em;\n  transform: none;\n}\n.select.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n.select.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n.select.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n.file {\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n.file.is-white .file-cta {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n  color: #0a0a0a;\n}\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-black .file-cta {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n  color: white;\n}\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n.file.is-light .file-cta {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: #363636;\n}\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: #363636;\n}\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n  color: #363636;\n}\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: #363636;\n}\n.file.is-dark .file-cta {\n  background-color: #363636;\n  border-color: transparent;\n  color: whitesmoke;\n}\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: whitesmoke;\n}\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n  color: whitesmoke;\n}\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n  background-color: #292929;\n  border-color: transparent;\n  color: whitesmoke;\n}\n.file.is-primary .file-cta {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n  color: #fff;\n}\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link .file-cta {\n  background-color: #3273dc;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n  background-color: #276cda;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n  color: #fff;\n}\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n  background-color: #2366d1;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info .file-cta {\n  background-color: #209cee;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n  background-color: #1496ed;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(32, 156, 238, 0.25);\n  color: #fff;\n}\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n  background-color: #118fe4;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success .file-cta {\n  background-color: #23d160;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n  background-color: #22c65b;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);\n  color: #fff;\n}\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n  background-color: #20bc56;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-warning .file-cta {\n  background-color: #ffdd57;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n  background-color: #ffdb4a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n  background-color: #ffd83d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-danger .file-cta {\n  background-color: #ff3860;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n  background-color: #ff2b56;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.25);\n  color: #fff;\n}\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n  background-color: #ff1f4b;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-small {\n  font-size: 0.75rem;\n}\n.file.is-medium {\n  font-size: 1.25rem;\n}\n.file.is-medium .file-icon .fa {\n  font-size: 21px;\n}\n.file.is-large {\n  font-size: 1.5rem;\n}\n.file.is-large .file-icon .fa {\n  font-size: 28px;\n}\n.file.has-name .file-cta {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.file.has-name .file-name {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.file.has-name.is-empty .file-cta {\n  border-radius: 4px;\n}\n.file.has-name.is-empty .file-name {\n  display: none;\n}\n.file.is-boxed .file-label {\n  flex-direction: column;\n}\n.file.is-boxed .file-cta {\n  flex-direction: column;\n  height: auto;\n  padding: 1em 3em;\n}\n.file.is-boxed .file-name {\n  border-width: 0 1px 1px;\n}\n.file.is-boxed .file-icon {\n  height: 1.5em;\n  width: 1.5em;\n}\n.file.is-boxed .file-icon .fa {\n  font-size: 21px;\n}\n.file.is-boxed.is-small .file-icon .fa {\n  font-size: 14px;\n}\n.file.is-boxed.is-medium .file-icon .fa {\n  font-size: 28px;\n}\n.file.is-boxed.is-large .file-icon .fa {\n  font-size: 35px;\n}\n.file.is-boxed.has-name .file-cta {\n  border-radius: 4px 4px 0 0;\n}\n.file.is-boxed.has-name .file-name {\n  border-radius: 0 0 4px 4px;\n  border-width: 0 1px 1px;\n}\n.file.is-centered {\n  justify-content: center;\n}\n.file.is-fullwidth .file-label {\n  width: 100%;\n}\n.file.is-fullwidth .file-name {\n  flex-grow: 1;\n  max-width: none;\n}\n.file.is-right {\n  justify-content: flex-end;\n}\n.file.is-right .file-cta {\n  border-radius: 0 4px 4px 0;\n}\n.file.is-right .file-name {\n  border-radius: 4px 0 0 4px;\n  border-width: 1px 0 1px 1px;\n  order: -1;\n}\n\n.file-label {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative;\n}\n.file-label:hover .file-cta {\n  background-color: #eeeeee;\n  color: #363636;\n}\n.file-label:hover .file-name {\n  border-color: #d5d5d5;\n}\n.file-label:active .file-cta {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.file-label:active .file-name {\n  border-color: #cfcfcf;\n}\n\n.file-input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.file-cta,\n.file-name {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap;\n}\n\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a;\n}\n\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis;\n}\n\n.file-icon {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em;\n}\n.file-icon .fa {\n  font-size: 14px;\n}\n\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.label:not(:last-child) {\n  margin-bottom: 0.5em;\n}\n.label.is-small {\n  font-size: 0.75rem;\n}\n.label.is-medium {\n  font-size: 1.25rem;\n}\n.label.is-large {\n  font-size: 1.5rem;\n}\n\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.help.is-white {\n  color: white;\n}\n.help.is-black {\n  color: #0a0a0a;\n}\n.help.is-light {\n  color: whitesmoke;\n}\n.help.is-dark {\n  color: #363636;\n}\n.help.is-primary {\n  color: #00d1b2;\n}\n.help.is-link {\n  color: #3273dc;\n}\n.help.is-info {\n  color: #209cee;\n}\n.help.is-success {\n  color: #23d160;\n}\n.help.is-warning {\n  color: #ffdd57;\n}\n.help.is-danger {\n  color: #ff3860;\n}\n\n.field:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start;\n}\n.field.has-addons .control:not(:last-child) {\n  margin-right: -1px;\n}\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n.field.has-addons .control:not(:first-child):not(:last-child) .input,\n.field.has-addons .control:not(:first-child):not(:last-child) .select select {\n  border-radius: 0;\n}\n.field.has-addons .control:first-child:not(:only-child) .button,\n.field.has-addons .control:first-child:not(:only-child) .input,\n.field.has-addons .control:first-child:not(:only-child) .select select {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.field.has-addons .control:last-child:not(:only-child) .button,\n.field.has-addons .control:last-child:not(:only-child) .input,\n.field.has-addons .control:last-child:not(:only-child) .select select {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n.field.has-addons .control .input:not([disabled]):hover,\n.field.has-addons .control .input:not([disabled]).is-hovered,\n.field.has-addons .control .select select:not([disabled]):hover,\n.field.has-addons .control .select select:not([disabled]).is-hovered {\n  z-index: 2;\n}\n.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n.field.has-addons .control .input:not([disabled]):focus,\n.field.has-addons .control .input:not([disabled]).is-focused,\n.field.has-addons .control .input:not([disabled]):active,\n.field.has-addons .control .input:not([disabled]).is-active,\n.field.has-addons .control .select select:not([disabled]):focus,\n.field.has-addons .control .select select:not([disabled]).is-focused,\n.field.has-addons .control .select select:not([disabled]):active,\n.field.has-addons .control .select select:not([disabled]).is-active {\n  z-index: 3;\n}\n.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n.field.has-addons .control .input:not([disabled]):focus:hover,\n.field.has-addons .control .input:not([disabled]).is-focused:hover,\n.field.has-addons .control .input:not([disabled]):active:hover,\n.field.has-addons .control .input:not([disabled]).is-active:hover,\n.field.has-addons .control .select select:not([disabled]):focus:hover,\n.field.has-addons .control .select select:not([disabled]).is-focused:hover,\n.field.has-addons .control .select select:not([disabled]):active:hover,\n.field.has-addons .control .select select:not([disabled]).is-active:hover {\n  z-index: 4;\n}\n.field.has-addons .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.field.has-addons.has-addons-centered {\n  justify-content: center;\n}\n.field.has-addons.has-addons-right {\n  justify-content: flex-end;\n}\n.field.has-addons.has-addons-fullwidth .control {\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start;\n}\n.field.is-grouped > .control {\n  flex-shrink: 0;\n}\n.field.is-grouped > .control:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n.field.is-grouped > .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.field.is-grouped.is-grouped-centered {\n  justify-content: center;\n}\n.field.is-grouped.is-grouped-right {\n  justify-content: flex-end;\n}\n.field.is-grouped.is-grouped-multiline {\n  flex-wrap: wrap;\n}\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:last-child {\n  margin-bottom: -0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n  .field.is-horizontal {\n    display: flex;\n  }\n}\n\n.field-label .label {\n  font-size: inherit;\n}\n@media screen and (max-width: 768px) {\n  .field-label {\n    margin-bottom: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .field-label {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right;\n  }\n  .field-label.is-small {\n    font-size: 0.75rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-normal {\n    padding-top: 0.375em;\n  }\n  .field-label.is-medium {\n    font-size: 1.25rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-large {\n    font-size: 1.5rem;\n    padding-top: 0.375em;\n  }\n}\n\n.field-body .field .field {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n  .field-body {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1;\n  }\n  .field-body .field {\n    margin-bottom: 0;\n  }\n  .field-body > .field {\n    flex-shrink: 1;\n  }\n  .field-body > .field:not(.is-narrow) {\n    flex-grow: 1;\n  }\n  .field-body > .field:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.control {\n  box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: left;\n}\n.control.has-icons-left .input:focus ~ .icon,\n.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n.control.has-icons-right .select:focus ~ .icon {\n  color: #7a7a7a;\n}\n.control.has-icons-left .input.is-small ~ .icon,\n.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n.control.has-icons-right .select.is-small ~ .icon {\n  font-size: 0.75rem;\n}\n.control.has-icons-left .input.is-medium ~ .icon,\n.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n.control.has-icons-right .select.is-medium ~ .icon {\n  font-size: 1.25rem;\n}\n.control.has-icons-left .input.is-large ~ .icon,\n.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n.control.has-icons-right .select.is-large ~ .icon {\n  font-size: 1.5rem;\n}\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n  color: #dbdbdb;\n  height: 2.25em;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 2.25em;\n  z-index: 4;\n}\n.control.has-icons-left .input,\n.control.has-icons-left .select select {\n  padding-left: 2.25em;\n}\n.control.has-icons-left .icon.is-left {\n  left: 0;\n}\n.control.has-icons-right .input,\n.control.has-icons-right .select select {\n  padding-right: 2.25em;\n}\n.control.has-icons-right .icon.is-right {\n  right: 0;\n}\n.control.is-loading::after {\n  position: absolute !important;\n  right: 0.625em;\n  top: 0.625em;\n  z-index: 4;\n}\n.control.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n.control.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n.control.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n.breadcrumb {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n.breadcrumb a {\n  align-items: center;\n  color: #3273dc;\n  display: flex;\n  justify-content: center;\n  padding: 0 0.75em;\n}\n.breadcrumb a:hover {\n  color: #363636;\n}\n.breadcrumb li {\n  align-items: center;\n  display: flex;\n}\n.breadcrumb li:first-child a {\n  padding-left: 0;\n}\n.breadcrumb li.is-active a {\n  color: #363636;\n  cursor: default;\n  pointer-events: none;\n}\n.breadcrumb li + li::before {\n  color: #b5b5b5;\n  content: \"/\";\n}\n.breadcrumb ul,\n.breadcrumb ol {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.breadcrumb .icon:first-child {\n  margin-right: 0.5em;\n}\n.breadcrumb .icon:last-child {\n  margin-left: 0.5em;\n}\n.breadcrumb.is-centered ol,\n.breadcrumb.is-centered ul {\n  justify-content: center;\n}\n.breadcrumb.is-right ol,\n.breadcrumb.is-right ul {\n  justify-content: flex-end;\n}\n.breadcrumb.is-small {\n  font-size: 0.75rem;\n}\n.breadcrumb.is-medium {\n  font-size: 1.25rem;\n}\n.breadcrumb.is-large {\n  font-size: 1.5rem;\n}\n.breadcrumb.has-arrow-separator li + li::before {\n  content: \"→\";\n}\n.breadcrumb.has-bullet-separator li + li::before {\n  content: \"•\";\n}\n.breadcrumb.has-dot-separator li + li::before {\n  content: \"·\";\n}\n.breadcrumb.has-succeeds-separator li + li::before {\n  content: \"≻\";\n}\n\n.card {\n  background-color: white;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  max-width: 100%;\n  position: relative;\n}\n\n.card-header {\n  background-color: transparent;\n  align-items: stretch;\n  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);\n  display: flex;\n}\n\n.card-header-title {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem;\n}\n.card-header-title.is-centered {\n  justify-content: center;\n}\n\n.card-header-icon {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: 0.75rem;\n}\n\n.card-image {\n  display: block;\n  position: relative;\n}\n\n.card-content {\n  background-color: transparent;\n  padding: 1.5rem;\n}\n\n.card-footer {\n  background-color: transparent;\n  border-top: 1px solid #dbdbdb;\n  align-items: stretch;\n  display: flex;\n}\n\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: center;\n  padding: 0.75rem;\n}\n.card-footer-item:not(:last-child) {\n  border-right: 1px solid #dbdbdb;\n}\n\n.card .media:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top;\n}\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n  display: block;\n}\n.dropdown.is-right .dropdown-menu {\n  left: auto;\n  right: 0;\n}\n.dropdown.is-up .dropdown-menu {\n  bottom: 100%;\n  padding-bottom: 4px;\n  padding-top: initial;\n  top: auto;\n}\n\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20;\n}\n\n.dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.dropdown-item {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative;\n}\n\na.dropdown-item,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: left;\n  white-space: nowrap;\n  width: 100%;\n}\na.dropdown-item:hover,\nbutton.dropdown-item:hover {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n}\na.dropdown-item.is-active,\nbutton.dropdown-item.is-active {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.dropdown-divider {\n  background-color: #dbdbdb;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n\n.level {\n  align-items: center;\n  justify-content: space-between;\n}\n.level code {\n  border-radius: 4px;\n}\n.level img {\n  display: inline-block;\n  vertical-align: top;\n}\n.level.is-mobile {\n  display: flex;\n}\n.level.is-mobile .level-left,\n.level.is-mobile .level-right {\n  display: flex;\n}\n.level.is-mobile .level-left + .level-right {\n  margin-top: 0;\n}\n.level.is-mobile .level-item:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n.level.is-mobile .level-item:not(.is-narrow) {\n  flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n  .level {\n    display: flex;\n  }\n  .level > .level-item:not(.is-narrow) {\n    flex-grow: 1;\n  }\n}\n\n.level-item {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n}\n.level-item .title,\n.level-item .subtitle {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 768px) {\n  .level-item:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n\n.level-left,\n.level-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.level-left .level-item.is-flexible,\n.level-right .level-item.is-flexible {\n  flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n  .level-left .level-item:not(:last-child),\n.level-right .level-item:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.level-left {\n  align-items: center;\n  justify-content: flex-start;\n}\n@media screen and (max-width: 768px) {\n  .level-left + .level-right {\n    margin-top: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .level-left {\n    display: flex;\n  }\n}\n\n.level-right {\n  align-items: center;\n  justify-content: flex-end;\n}\n@media screen and (min-width: 769px), print {\n  .level-right {\n    display: flex;\n  }\n}\n\n.list {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n}\n\n.list-item {\n  display: block;\n  padding: 0.5em 1em;\n}\n.list-item:not(a) {\n  color: #4a4a4a;\n}\n.list-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-item:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.list-item:not(:last-child) {\n  border-bottom: 1px solid #dbdbdb;\n}\n.list-item.is-active {\n  background-color: #3273dc;\n  color: #fff;\n}\n\na.list-item {\n  background-color: whitesmoke;\n  cursor: pointer;\n}\n\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: left;\n}\n.media .content:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.media .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  display: flex;\n  padding-top: 0.75rem;\n}\n.media .media .content:not(:last-child),\n.media .media .control:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\n.media .media .media {\n  padding-top: 0.5rem;\n}\n.media .media .media + .media {\n  margin-top: 0.5rem;\n}\n.media + .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  margin-top: 1rem;\n  padding-top: 1rem;\n}\n.media.is-large + .media {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n}\n\n.media-left,\n.media-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.media-left {\n  margin-right: 1rem;\n}\n\n.media-right {\n  margin-left: 1rem;\n}\n\n.media-content {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  text-align: left;\n}\n\n@media screen and (max-width: 768px) {\n  .media-content {\n    overflow-x: auto;\n  }\n}\n.menu {\n  font-size: 1rem;\n}\n.menu.is-small {\n  font-size: 0.75rem;\n}\n.menu.is-medium {\n  font-size: 1.25rem;\n}\n.menu.is-large {\n  font-size: 1.5rem;\n}\n\n.menu-list {\n  line-height: 1.25;\n}\n.menu-list a {\n  border-radius: 2px;\n  color: #4a4a4a;\n  display: block;\n  padding: 0.5em 0.75em;\n}\n.menu-list a:hover {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.menu-list a.is-active {\n  background-color: #3273dc;\n  color: #fff;\n}\n.menu-list li ul {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em;\n}\n\n.menu-label {\n  color: #7a7a7a;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.menu-label:not(:first-child) {\n  margin-top: 1em;\n}\n.menu-label:not(:last-child) {\n  margin-bottom: 1em;\n}\n\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.message strong {\n  color: currentColor;\n}\n.message a:not(.button):not(.tag):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n.message.is-small {\n  font-size: 0.75rem;\n}\n.message.is-medium {\n  font-size: 1.25rem;\n}\n.message.is-large {\n  font-size: 1.5rem;\n}\n.message.is-white {\n  background-color: white;\n}\n.message.is-white .message-header {\n  background-color: white;\n  color: #0a0a0a;\n}\n.message.is-white .message-body {\n  border-color: white;\n  color: #4d4d4d;\n}\n.message.is-black {\n  background-color: #fafafa;\n}\n.message.is-black .message-header {\n  background-color: #0a0a0a;\n  color: white;\n}\n.message.is-black .message-body {\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.message.is-light {\n  background-color: #fafafa;\n}\n.message.is-light .message-header {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.message.is-light .message-body {\n  border-color: whitesmoke;\n  color: #4f4f4f;\n}\n.message.is-dark {\n  background-color: #fafafa;\n}\n.message.is-dark .message-header {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.message.is-dark .message-body {\n  border-color: #363636;\n  color: #2a2a2a;\n}\n.message.is-primary {\n  background-color: #f5fffd;\n}\n.message.is-primary .message-header {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.message.is-primary .message-body {\n  border-color: #00d1b2;\n  color: #021310;\n}\n.message.is-link {\n  background-color: #f6f9fe;\n}\n.message.is-link .message-header {\n  background-color: #3273dc;\n  color: #fff;\n}\n.message.is-link .message-body {\n  border-color: #3273dc;\n  color: #22509a;\n}\n.message.is-info {\n  background-color: #f6fbfe;\n}\n.message.is-info .message-header {\n  background-color: #209cee;\n  color: #fff;\n}\n.message.is-info .message-body {\n  border-color: #209cee;\n  color: #12537e;\n}\n.message.is-success {\n  background-color: #f6fef9;\n}\n.message.is-success .message-header {\n  background-color: #23d160;\n  color: #fff;\n}\n.message.is-success .message-body {\n  border-color: #23d160;\n  color: #0e311a;\n}\n.message.is-warning {\n  background-color: #fffdf5;\n}\n.message.is-warning .message-header {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.message.is-warning .message-body {\n  border-color: #ffdd57;\n  color: #3c3108;\n}\n.message.is-danger {\n  background-color: #fff5f7;\n}\n.message.is-danger .message-header {\n  background-color: #ff3860;\n  color: #fff;\n}\n.message.is-danger .message-body {\n  border-color: #ff3860;\n  color: #cd0930;\n}\n\n.message-header {\n  align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 4px 4px 0 0;\n  color: #fff;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n  position: relative;\n}\n.message-header .delete {\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-left: 0.75em;\n}\n.message-header + .message-body {\n  border-width: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.message-body {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 0 0 0 4px;\n  color: #4a4a4a;\n  padding: 1.25em 1.5em;\n}\n.message-body code,\n.message-body pre {\n  background-color: white;\n}\n.message-body pre code {\n  background-color: transparent;\n}\n\n.modal {\n  align-items: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40;\n}\n.modal.is-active {\n  display: flex;\n}\n\n.modal-background {\n  background-color: rgba(10, 10, 10, 0.86);\n}\n\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .modal-content,\n.modal-card {\n    margin: 0 auto;\n    max-height: calc(100vh - 40px);\n    width: 640px;\n  }\n}\n\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n}\n\n.modal-card {\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  -ms-overflow-y: visible;\n}\n\n.modal-card-head,\n.modal-card-foot {\n  align-items: center;\n  background-color: whitesmoke;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  padding: 20px;\n  position: relative;\n}\n\n.modal-card-head {\n  border-bottom: 1px solid #dbdbdb;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.modal-card-title {\n  color: #363636;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.modal-card-foot {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top: 1px solid #dbdbdb;\n}\n.modal-card-foot .button:not(:last-child) {\n  margin-right: 0.5em;\n}\n\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  background-color: white;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  padding: 20px;\n}\n\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30;\n}\n.navbar.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > .navbar-item,\n.navbar.is-white .navbar-brand .navbar-link {\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n.navbar.is-white .navbar-brand .navbar-link:focus,\n.navbar.is-white .navbar-brand .navbar-link:hover,\n.navbar.is-white .navbar-brand .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand .navbar-link::after {\n  border-color: #0a0a0a;\n}\n.navbar.is-white .navbar-burger {\n  color: #0a0a0a;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-white .navbar-start > .navbar-item,\n.navbar.is-white .navbar-start .navbar-link,\n.navbar.is-white .navbar-end > .navbar-item,\n.navbar.is-white .navbar-end .navbar-link {\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n.navbar.is-white .navbar-start .navbar-link:focus,\n.navbar.is-white .navbar-start .navbar-link:hover,\n.navbar.is-white .navbar-start .navbar-link.is-active,\n.navbar.is-white .navbar-end > a.navbar-item:focus,\n.navbar.is-white .navbar-end > a.navbar-item:hover,\n.navbar.is-white .navbar-end > a.navbar-item.is-active,\n.navbar.is-white .navbar-end .navbar-link:focus,\n.navbar.is-white .navbar-end .navbar-link:hover,\n.navbar.is-white .navbar-end .navbar-link.is-active {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start .navbar-link::after,\n.navbar.is-white .navbar-end .navbar-link::after {\n    border-color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n    background-color: white;\n    color: #0a0a0a;\n  }\n}\n.navbar.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.navbar.is-black .navbar-brand > .navbar-item,\n.navbar.is-black .navbar-brand .navbar-link {\n  color: white;\n}\n.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n.navbar.is-black .navbar-brand .navbar-link:focus,\n.navbar.is-black .navbar-brand .navbar-link:hover,\n.navbar.is-black .navbar-brand .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n.navbar.is-black .navbar-brand .navbar-link::after {\n  border-color: white;\n}\n.navbar.is-black .navbar-burger {\n  color: white;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-black .navbar-start > .navbar-item,\n.navbar.is-black .navbar-start .navbar-link,\n.navbar.is-black .navbar-end > .navbar-item,\n.navbar.is-black .navbar-end .navbar-link {\n    color: white;\n  }\n  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n.navbar.is-black .navbar-start .navbar-link:focus,\n.navbar.is-black .navbar-start .navbar-link:hover,\n.navbar.is-black .navbar-start .navbar-link.is-active,\n.navbar.is-black .navbar-end > a.navbar-item:focus,\n.navbar.is-black .navbar-end > a.navbar-item:hover,\n.navbar.is-black .navbar-end > a.navbar-item.is-active,\n.navbar.is-black .navbar-end .navbar-link:focus,\n.navbar.is-black .navbar-end .navbar-link:hover,\n.navbar.is-black .navbar-end .navbar-link.is-active {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-start .navbar-link::after,\n.navbar.is-black .navbar-end .navbar-link::after {\n    border-color: white;\n  }\n  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n    background-color: #0a0a0a;\n    color: white;\n  }\n}\n.navbar.is-light {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.navbar.is-light .navbar-brand > .navbar-item,\n.navbar.is-light .navbar-brand .navbar-link {\n  color: #363636;\n}\n.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n.navbar.is-light .navbar-brand .navbar-link:focus,\n.navbar.is-light .navbar-brand .navbar-link:hover,\n.navbar.is-light .navbar-brand .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.navbar.is-light .navbar-brand .navbar-link::after {\n  border-color: #363636;\n}\n.navbar.is-light .navbar-burger {\n  color: #363636;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-light .navbar-start > .navbar-item,\n.navbar.is-light .navbar-start .navbar-link,\n.navbar.is-light .navbar-end > .navbar-item,\n.navbar.is-light .navbar-end .navbar-link {\n    color: #363636;\n  }\n  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n.navbar.is-light .navbar-start .navbar-link:focus,\n.navbar.is-light .navbar-start .navbar-link:hover,\n.navbar.is-light .navbar-start .navbar-link.is-active,\n.navbar.is-light .navbar-end > a.navbar-item:focus,\n.navbar.is-light .navbar-end > a.navbar-item:hover,\n.navbar.is-light .navbar-end > a.navbar-item.is-active,\n.navbar.is-light .navbar-end .navbar-link:focus,\n.navbar.is-light .navbar-end .navbar-link:hover,\n.navbar.is-light .navbar-end .navbar-link.is-active {\n    background-color: #e8e8e8;\n    color: #363636;\n  }\n  .navbar.is-light .navbar-start .navbar-link::after,\n.navbar.is-light .navbar-end .navbar-link::after {\n    border-color: #363636;\n  }\n  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #e8e8e8;\n    color: #363636;\n  }\n  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #363636;\n  }\n}\n.navbar.is-dark {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.navbar.is-dark .navbar-brand > .navbar-item,\n.navbar.is-dark .navbar-brand .navbar-link {\n  color: whitesmoke;\n}\n.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n.navbar.is-dark .navbar-brand .navbar-link:focus,\n.navbar.is-dark .navbar-brand .navbar-link:hover,\n.navbar.is-dark .navbar-brand .navbar-link.is-active {\n  background-color: #292929;\n  color: whitesmoke;\n}\n.navbar.is-dark .navbar-brand .navbar-link::after {\n  border-color: whitesmoke;\n}\n.navbar.is-dark .navbar-burger {\n  color: whitesmoke;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-dark .navbar-start > .navbar-item,\n.navbar.is-dark .navbar-start .navbar-link,\n.navbar.is-dark .navbar-end > .navbar-item,\n.navbar.is-dark .navbar-end .navbar-link {\n    color: whitesmoke;\n  }\n  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n.navbar.is-dark .navbar-start .navbar-link:focus,\n.navbar.is-dark .navbar-start .navbar-link:hover,\n.navbar.is-dark .navbar-start .navbar-link.is-active,\n.navbar.is-dark .navbar-end > a.navbar-item:focus,\n.navbar.is-dark .navbar-end > a.navbar-item:hover,\n.navbar.is-dark .navbar-end > a.navbar-item.is-active,\n.navbar.is-dark .navbar-end .navbar-link:focus,\n.navbar.is-dark .navbar-end .navbar-link:hover,\n.navbar.is-dark .navbar-end .navbar-link.is-active {\n    background-color: #292929;\n    color: whitesmoke;\n  }\n  .navbar.is-dark .navbar-start .navbar-link::after,\n.navbar.is-dark .navbar-end .navbar-link::after {\n    border-color: whitesmoke;\n  }\n  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #292929;\n    color: whitesmoke;\n  }\n  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n    background-color: #363636;\n    color: whitesmoke;\n  }\n}\n.navbar.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand > .navbar-item,\n.navbar.is-primary .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n.navbar.is-primary .navbar-brand .navbar-link:focus,\n.navbar.is-primary .navbar-brand .navbar-link:hover,\n.navbar.is-primary .navbar-brand .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-primary .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-primary .navbar-start > .navbar-item,\n.navbar.is-primary .navbar-start .navbar-link,\n.navbar.is-primary .navbar-end > .navbar-item,\n.navbar.is-primary .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n.navbar.is-primary .navbar-start .navbar-link:focus,\n.navbar.is-primary .navbar-start .navbar-link:hover,\n.navbar.is-primary .navbar-start .navbar-link.is-active,\n.navbar.is-primary .navbar-end > a.navbar-item:focus,\n.navbar.is-primary .navbar-end > a.navbar-item:hover,\n.navbar.is-primary .navbar-end > a.navbar-item.is-active,\n.navbar.is-primary .navbar-end .navbar-link:focus,\n.navbar.is-primary .navbar-end .navbar-link:hover,\n.navbar.is-primary .navbar-end .navbar-link.is-active {\n    background-color: #00b89c;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start .navbar-link::after,\n.navbar.is-primary .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #00b89c;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n    background-color: #00d1b2;\n    color: #fff;\n  }\n}\n.navbar.is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n.navbar.is-link .navbar-brand > .navbar-item,\n.navbar.is-link .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n.navbar.is-link .navbar-brand .navbar-link:focus,\n.navbar.is-link .navbar-brand .navbar-link:hover,\n.navbar.is-link .navbar-brand .navbar-link.is-active {\n  background-color: #2366d1;\n  color: #fff;\n}\n.navbar.is-link .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-link .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-link .navbar-start > .navbar-item,\n.navbar.is-link .navbar-start .navbar-link,\n.navbar.is-link .navbar-end > .navbar-item,\n.navbar.is-link .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n.navbar.is-link .navbar-start .navbar-link:focus,\n.navbar.is-link .navbar-start .navbar-link:hover,\n.navbar.is-link .navbar-start .navbar-link.is-active,\n.navbar.is-link .navbar-end > a.navbar-item:focus,\n.navbar.is-link .navbar-end > a.navbar-item:hover,\n.navbar.is-link .navbar-end > a.navbar-item.is-active,\n.navbar.is-link .navbar-end .navbar-link:focus,\n.navbar.is-link .navbar-end .navbar-link:hover,\n.navbar.is-link .navbar-end .navbar-link.is-active {\n    background-color: #2366d1;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start .navbar-link::after,\n.navbar.is-link .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #2366d1;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n    background-color: #3273dc;\n    color: #fff;\n  }\n}\n.navbar.is-info {\n  background-color: #209cee;\n  color: #fff;\n}\n.navbar.is-info .navbar-brand > .navbar-item,\n.navbar.is-info .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n.navbar.is-info .navbar-brand .navbar-link:focus,\n.navbar.is-info .navbar-brand .navbar-link:hover,\n.navbar.is-info .navbar-brand .navbar-link.is-active {\n  background-color: #118fe4;\n  color: #fff;\n}\n.navbar.is-info .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-info .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-info .navbar-start > .navbar-item,\n.navbar.is-info .navbar-start .navbar-link,\n.navbar.is-info .navbar-end > .navbar-item,\n.navbar.is-info .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n.navbar.is-info .navbar-start .navbar-link:focus,\n.navbar.is-info .navbar-start .navbar-link:hover,\n.navbar.is-info .navbar-start .navbar-link.is-active,\n.navbar.is-info .navbar-end > a.navbar-item:focus,\n.navbar.is-info .navbar-end > a.navbar-item:hover,\n.navbar.is-info .navbar-end > a.navbar-item.is-active,\n.navbar.is-info .navbar-end .navbar-link:focus,\n.navbar.is-info .navbar-end .navbar-link:hover,\n.navbar.is-info .navbar-end .navbar-link.is-active {\n    background-color: #118fe4;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start .navbar-link::after,\n.navbar.is-info .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #118fe4;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n    background-color: #209cee;\n    color: #fff;\n  }\n}\n.navbar.is-success {\n  background-color: #23d160;\n  color: #fff;\n}\n.navbar.is-success .navbar-brand > .navbar-item,\n.navbar.is-success .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n.navbar.is-success .navbar-brand .navbar-link:focus,\n.navbar.is-success .navbar-brand .navbar-link:hover,\n.navbar.is-success .navbar-brand .navbar-link.is-active {\n  background-color: #20bc56;\n  color: #fff;\n}\n.navbar.is-success .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-success .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-success .navbar-start > .navbar-item,\n.navbar.is-success .navbar-start .navbar-link,\n.navbar.is-success .navbar-end > .navbar-item,\n.navbar.is-success .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n.navbar.is-success .navbar-start .navbar-link:focus,\n.navbar.is-success .navbar-start .navbar-link:hover,\n.navbar.is-success .navbar-start .navbar-link.is-active,\n.navbar.is-success .navbar-end > a.navbar-item:focus,\n.navbar.is-success .navbar-end > a.navbar-item:hover,\n.navbar.is-success .navbar-end > a.navbar-item.is-active,\n.navbar.is-success .navbar-end .navbar-link:focus,\n.navbar.is-success .navbar-end .navbar-link:hover,\n.navbar.is-success .navbar-end .navbar-link.is-active {\n    background-color: #20bc56;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start .navbar-link::after,\n.navbar.is-success .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #20bc56;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n    background-color: #23d160;\n    color: #fff;\n  }\n}\n.navbar.is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > .navbar-item,\n.navbar.is-warning .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n.navbar.is-warning .navbar-brand .navbar-link:focus,\n.navbar.is-warning .navbar-brand .navbar-link:hover,\n.navbar.is-warning .navbar-brand .navbar-link.is-active {\n  background-color: #ffd83d;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-warning .navbar-start > .navbar-item,\n.navbar.is-warning .navbar-start .navbar-link,\n.navbar.is-warning .navbar-end > .navbar-item,\n.navbar.is-warning .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n.navbar.is-warning .navbar-start .navbar-link:focus,\n.navbar.is-warning .navbar-start .navbar-link:hover,\n.navbar.is-warning .navbar-start .navbar-link.is-active,\n.navbar.is-warning .navbar-end > a.navbar-item:focus,\n.navbar.is-warning .navbar-end > a.navbar-item:hover,\n.navbar.is-warning .navbar-end > a.navbar-item.is-active,\n.navbar.is-warning .navbar-end .navbar-link:focus,\n.navbar.is-warning .navbar-end .navbar-link:hover,\n.navbar.is-warning .navbar-end .navbar-link.is-active {\n    background-color: #ffd83d;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start .navbar-link::after,\n.navbar.is-warning .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ffd83d;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n.navbar.is-danger {\n  background-color: #ff3860;\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand > .navbar-item,\n.navbar.is-danger .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n.navbar.is-danger .navbar-brand .navbar-link:focus,\n.navbar.is-danger .navbar-brand .navbar-link:hover,\n.navbar.is-danger .navbar-brand .navbar-link.is-active {\n  background-color: #ff1f4b;\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-danger .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-danger .navbar-start > .navbar-item,\n.navbar.is-danger .navbar-start .navbar-link,\n.navbar.is-danger .navbar-end > .navbar-item,\n.navbar.is-danger .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n.navbar.is-danger .navbar-start .navbar-link:focus,\n.navbar.is-danger .navbar-start .navbar-link:hover,\n.navbar.is-danger .navbar-start .navbar-link.is-active,\n.navbar.is-danger .navbar-end > a.navbar-item:focus,\n.navbar.is-danger .navbar-end > a.navbar-item:hover,\n.navbar.is-danger .navbar-end > a.navbar-item.is-active,\n.navbar.is-danger .navbar-end .navbar-link:focus,\n.navbar.is-danger .navbar-end .navbar-link:hover,\n.navbar.is-danger .navbar-end .navbar-link.is-active {\n    background-color: #ff1f4b;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start .navbar-link::after,\n.navbar.is-danger .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ff1f4b;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n    background-color: #ff3860;\n    color: #fff;\n  }\n}\n.navbar > .container {\n  align-items: stretch;\n  display: flex;\n  min-height: 3.25rem;\n  width: 100%;\n}\n.navbar.has-shadow {\n  box-shadow: 0 2px 0 0 whitesmoke;\n}\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: 30;\n}\n.navbar.is-fixed-bottom {\n  bottom: 0;\n}\n.navbar.is-fixed-bottom.has-shadow {\n  box-shadow: 0 -2px 0 0 whitesmoke;\n}\n.navbar.is-fixed-top {\n  top: 0;\n}\n\nhtml.has-navbar-fixed-top,\nbody.has-navbar-fixed-top {\n  padding-top: 3.25rem;\n}\nhtml.has-navbar-fixed-bottom,\nbody.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem;\n}\n\n.navbar-brand,\n.navbar-tabs {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: 3.25rem;\n}\n\n.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {\n  background-color: transparent;\n}\n\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.navbar-burger {\n  color: #4a4a4a;\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto;\n}\n.navbar-burger span {\n  background-color: currentColor;\n  display: block;\n  height: 1px;\n  left: calc(50% - 8px);\n  position: absolute;\n  transform-origin: center;\n  transition-duration: 86ms;\n  transition-property: background-color, opacity, transform;\n  transition-timing-function: ease-out;\n  width: 16px;\n}\n.navbar-burger span:nth-child(1) {\n  top: calc(50% - 6px);\n}\n.navbar-burger span:nth-child(2) {\n  top: calc(50% - 1px);\n}\n.navbar-burger span:nth-child(3) {\n  top: calc(50% + 4px);\n}\n.navbar-burger:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.navbar-burger.is-active span:nth-child(1) {\n  transform: translateY(5px) rotate(45deg);\n}\n.navbar-burger.is-active span:nth-child(2) {\n  opacity: 0;\n}\n.navbar-burger.is-active span:nth-child(3) {\n  transform: translateY(-5px) rotate(-45deg);\n}\n\n.navbar-menu {\n  display: none;\n}\n\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative;\n}\n.navbar-item .icon:only-child,\n.navbar-link .icon:only-child {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n\na.navbar-item,\n.navbar-link {\n  cursor: pointer;\n}\na.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,\n.navbar-link:focus,\n.navbar-link:focus-within,\n.navbar-link:hover,\n.navbar-link.is-active {\n  background-color: #fafafa;\n  color: #3273dc;\n}\n\n.navbar-item {\n  display: block;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.navbar-item img {\n  max-height: 1.75rem;\n}\n.navbar-item.has-dropdown {\n  padding: 0;\n}\n.navbar-item.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.navbar-item.is-tab {\n  border-bottom: 1px solid transparent;\n  min-height: 3.25rem;\n  padding-bottom: calc(0.5rem - 1px);\n}\n.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {\n  background-color: transparent;\n  border-bottom-color: #3273dc;\n}\n.navbar-item.is-tab.is-active {\n  background-color: transparent;\n  border-bottom-color: #3273dc;\n  border-bottom-style: solid;\n  border-bottom-width: 3px;\n  color: #3273dc;\n  padding-bottom: calc(0.5rem - 3px);\n}\n\n.navbar-content {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.navbar-link:not(.is-arrowless) {\n  padding-right: 2.5em;\n}\n.navbar-link:not(.is-arrowless)::after {\n  border-color: #3273dc;\n  margin-top: -0.375em;\n  right: 1.125em;\n}\n\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.navbar-dropdown .navbar-item {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.navbar-divider {\n  background-color: whitesmoke;\n  border: none;\n  display: none;\n  height: 2px;\n  margin: 0.5rem 0;\n}\n\n@media screen and (max-width: 1023px) {\n  .navbar > .container {\n    display: block;\n  }\n\n  .navbar-brand .navbar-item,\n.navbar-tabs .navbar-item {\n    align-items: center;\n    display: flex;\n  }\n\n  .navbar-link::after {\n    display: none;\n  }\n\n  .navbar-menu {\n    background-color: white;\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0;\n  }\n  .navbar-menu.is-active {\n    display: block;\n  }\n\n  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-touch {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-touch.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-touch {\n    top: 0;\n  }\n  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto;\n  }\n\n  html.has-navbar-fixed-top-touch,\nbody.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-touch,\nbody.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .navbar,\n.navbar-menu,\n.navbar-start,\n.navbar-end {\n    align-items: stretch;\n    display: flex;\n  }\n\n  .navbar {\n    min-height: 3.25rem;\n  }\n  .navbar.is-spaced {\n    padding: 1rem 2rem;\n  }\n  .navbar.is-spaced .navbar-start,\n.navbar.is-spaced .navbar-end {\n    align-items: center;\n  }\n  .navbar.is-spaced a.navbar-item,\n.navbar.is-spaced .navbar-link {\n    border-radius: 4px;\n  }\n  .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n.navbar.is-transparent .navbar-link:focus,\n.navbar.is-transparent .navbar-link:hover,\n.navbar.is-transparent .navbar-link.is-active {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #3273dc;\n  }\n\n  .navbar-burger {\n    display: none;\n  }\n\n  .navbar-item,\n.navbar-link {\n    align-items: center;\n    display: flex;\n  }\n\n  .navbar-item {\n    display: flex;\n  }\n  .navbar-item.has-dropdown {\n    align-items: stretch;\n  }\n  .navbar-item.has-dropdown-up .navbar-link::after {\n    transform: rotate(135deg) translate(0.25em, -0.25em);\n  }\n  .navbar-item.has-dropdown-up .navbar-dropdown {\n    border-bottom: 2px solid #dbdbdb;\n    border-radius: 6px 6px 0 0;\n    border-top: none;\n    bottom: 100%;\n    box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n    top: auto;\n  }\n  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n    display: block;\n  }\n  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0);\n  }\n\n  .navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0;\n  }\n\n  .navbar-start {\n    justify-content: flex-start;\n    margin-right: auto;\n  }\n\n  .navbar-end {\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n\n  .navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-top: 2px solid #dbdbdb;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20;\n  }\n  .navbar-dropdown .navbar-item {\n    padding: 0.375rem 1rem;\n    white-space: nowrap;\n  }\n  .navbar-dropdown a.navbar-item {\n    padding-right: 3rem;\n  }\n  .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #3273dc;\n  }\n  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {\n    border-radius: 6px;\n    border-top: none;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    top: calc(100% + (-4px));\n    transform: translateY(-5px);\n    transition-duration: 86ms;\n    transition-property: opacity, transform;\n  }\n  .navbar-dropdown.is-right {\n    left: auto;\n    right: 0;\n  }\n\n  .navbar-divider {\n    display: block;\n  }\n\n  .navbar > .container .navbar-brand,\n.container > .navbar .navbar-brand {\n    margin-left: -0.75rem;\n  }\n  .navbar > .container .navbar-menu,\n.container > .navbar .navbar-menu {\n    margin-right: -0.75rem;\n  }\n\n  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-desktop {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-desktop.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-desktop {\n    top: 0;\n  }\n\n  html.has-navbar-fixed-top-desktop,\nbody.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-desktop,\nbody.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem;\n  }\n  html.has-spaced-navbar-fixed-top,\nbody.has-spaced-navbar-fixed-top {\n    padding-top: 5.25rem;\n  }\n  html.has-spaced-navbar-fixed-bottom,\nbody.has-spaced-navbar-fixed-bottom {\n    padding-bottom: 5.25rem;\n  }\n\n  a.navbar-item.is-active,\n.navbar-link.is-active {\n    color: #0a0a0a;\n  }\n  a.navbar-item.is-active:not(:focus):not(:hover),\n.navbar-link.is-active:not(:focus):not(:hover) {\n    background-color: transparent;\n  }\n\n  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #fafafa;\n  }\n}\n.hero.is-fullheight-with-navbar {\n  min-height: calc(100vh - 3.25rem);\n}\n\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem;\n}\n.pagination.is-small {\n  font-size: 0.75rem;\n}\n.pagination.is-medium {\n  font-size: 1.25rem;\n}\n.pagination.is-large {\n  font-size: 1.5rem;\n}\n.pagination.is-rounded .pagination-previous,\n.pagination.is-rounded .pagination-next {\n  padding-left: 1em;\n  padding-right: 1em;\n  border-radius: 290486px;\n}\n.pagination.is-rounded .pagination-link {\n  border-radius: 290486px;\n}\n\n.pagination,\n.pagination-list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  font-size: 1em;\n  justify-content: center;\n  margin: 0.25rem;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.25em;\n}\n.pagination-previous:hover,\n.pagination-next:hover,\n.pagination-link:hover {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus {\n  border-color: #3273dc;\n}\n.pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n}\n.pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled] {\n  background-color: #dbdbdb;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  color: #7a7a7a;\n  opacity: 0.5;\n}\n\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n\n.pagination-link.is-current {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none;\n}\n\n.pagination-list {\n  flex-wrap: wrap;\n}\n\n@media screen and (max-width: 768px) {\n  .pagination {\n    flex-wrap: wrap;\n  }\n\n  .pagination-previous,\n.pagination-next {\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n\n  .pagination-list li {\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .pagination-list {\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: flex-start;\n    order: 1;\n  }\n\n  .pagination-previous {\n    order: 2;\n  }\n\n  .pagination-next {\n    order: 3;\n  }\n\n  .pagination {\n    justify-content: space-between;\n  }\n  .pagination.is-centered .pagination-previous {\n    order: 1;\n  }\n  .pagination.is-centered .pagination-list {\n    justify-content: center;\n    order: 2;\n  }\n  .pagination.is-centered .pagination-next {\n    order: 3;\n  }\n  .pagination.is-right .pagination-previous {\n    order: 1;\n  }\n  .pagination.is-right .pagination-next {\n    order: 2;\n  }\n  .pagination.is-right .pagination-list {\n    justify-content: flex-end;\n    order: 3;\n  }\n}\n.panel {\n  font-size: 1rem;\n}\n.panel:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.panel-heading,\n.panel-tabs,\n.panel-block {\n  border-bottom: 1px solid #dbdbdb;\n  border-left: 1px solid #dbdbdb;\n  border-right: 1px solid #dbdbdb;\n}\n.panel-heading:first-child,\n.panel-tabs:first-child,\n.panel-block:first-child {\n  border-top: 1px solid #dbdbdb;\n}\n\n.panel-heading {\n  background-color: whitesmoke;\n  border-radius: 4px 4px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 300;\n  line-height: 1.25;\n  padding: 0.5em 0.75em;\n}\n\n.panel-tabs {\n  align-items: flex-end;\n  display: flex;\n  font-size: 0.875em;\n  justify-content: center;\n}\n.panel-tabs a {\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: -1px;\n  padding: 0.5em;\n}\n.panel-tabs a.is-active {\n  border-bottom-color: #4a4a4a;\n  color: #363636;\n}\n\n.panel-list a {\n  color: #4a4a4a;\n}\n.panel-list a:hover {\n  color: #3273dc;\n}\n\n.panel-block {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  justify-content: flex-start;\n  padding: 0.5em 0.75em;\n}\n.panel-block input[type=checkbox] {\n  margin-right: 0.75em;\n}\n.panel-block > .control {\n  flex-grow: 1;\n  flex-shrink: 1;\n  width: 100%;\n}\n.panel-block.is-wrapped {\n  flex-wrap: wrap;\n}\n.panel-block.is-active {\n  border-left-color: #3273dc;\n  color: #363636;\n}\n.panel-block.is-active .panel-icon {\n  color: #3273dc;\n}\n\na.panel-block,\nlabel.panel-block {\n  cursor: pointer;\n}\na.panel-block:hover,\nlabel.panel-block:hover {\n  background-color: whitesmoke;\n}\n\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em;\n}\n.panel-icon .fa {\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.tabs a {\n  align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  color: #4a4a4a;\n  display: flex;\n  justify-content: center;\n  margin-bottom: -1px;\n  padding: 0.5em 1em;\n  vertical-align: top;\n}\n.tabs a:hover {\n  border-bottom-color: #363636;\n  color: #363636;\n}\n.tabs li {\n  display: block;\n}\n.tabs li.is-active a {\n  border-bottom-color: #3273dc;\n  color: #3273dc;\n}\n.tabs ul {\n  align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: flex-start;\n}\n.tabs ul.is-left {\n  padding-right: 0.75em;\n}\n.tabs ul.is-center {\n  flex: none;\n  justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n}\n.tabs ul.is-right {\n  justify-content: flex-end;\n  padding-left: 0.75em;\n}\n.tabs .icon:first-child {\n  margin-right: 0.5em;\n}\n.tabs .icon:last-child {\n  margin-left: 0.5em;\n}\n.tabs.is-centered ul {\n  justify-content: center;\n}\n.tabs.is-right ul {\n  justify-content: flex-end;\n}\n.tabs.is-boxed a {\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.tabs.is-boxed a:hover {\n  background-color: whitesmoke;\n  border-bottom-color: #dbdbdb;\n}\n.tabs.is-boxed li.is-active a {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-bottom-color: transparent !important;\n}\n.tabs.is-fullwidth li {\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n.tabs.is-toggle a {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px;\n  margin-bottom: 0;\n  position: relative;\n}\n.tabs.is-toggle a:hover {\n  background-color: whitesmoke;\n  border-color: #b5b5b5;\n  z-index: 2;\n}\n.tabs.is-toggle li + li {\n  margin-left: -1px;\n}\n.tabs.is-toggle li:first-child a {\n  border-radius: 4px 0 0 4px;\n}\n.tabs.is-toggle li:last-child a {\n  border-radius: 0 4px 4px 0;\n}\n.tabs.is-toggle li.is-active a {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n  z-index: 1;\n}\n.tabs.is-toggle ul {\n  border-bottom: none;\n}\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n  border-bottom-left-radius: 290486px;\n  border-top-left-radius: 290486px;\n  padding-left: 1.25em;\n}\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n  border-bottom-right-radius: 290486px;\n  border-top-right-radius: 290486px;\n  padding-right: 1.25em;\n}\n.tabs.is-small {\n  font-size: 0.75rem;\n}\n.tabs.is-medium {\n  font-size: 1.25rem;\n}\n.tabs.is-large {\n  font-size: 1.5rem;\n}\n\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem;\n}\n.columns.is-mobile > .column.is-narrow {\n  flex: none;\n}\n.columns.is-mobile > .column.is-full {\n  flex: none;\n  width: 100%;\n}\n.columns.is-mobile > .column.is-three-quarters {\n  flex: none;\n  width: 75%;\n}\n.columns.is-mobile > .column.is-two-thirds {\n  flex: none;\n  width: 66.6666%;\n}\n.columns.is-mobile > .column.is-half {\n  flex: none;\n  width: 50%;\n}\n.columns.is-mobile > .column.is-one-third {\n  flex: none;\n  width: 33.3333%;\n}\n.columns.is-mobile > .column.is-one-quarter {\n  flex: none;\n  width: 25%;\n}\n.columns.is-mobile > .column.is-one-fifth {\n  flex: none;\n  width: 20%;\n}\n.columns.is-mobile > .column.is-two-fifths {\n  flex: none;\n  width: 40%;\n}\n.columns.is-mobile > .column.is-three-fifths {\n  flex: none;\n  width: 60%;\n}\n.columns.is-mobile > .column.is-four-fifths {\n  flex: none;\n  width: 80%;\n}\n.columns.is-mobile > .column.is-offset-three-quarters {\n  margin-left: 75%;\n}\n.columns.is-mobile > .column.is-offset-two-thirds {\n  margin-left: 66.6666%;\n}\n.columns.is-mobile > .column.is-offset-half {\n  margin-left: 50%;\n}\n.columns.is-mobile > .column.is-offset-one-third {\n  margin-left: 33.3333%;\n}\n.columns.is-mobile > .column.is-offset-one-quarter {\n  margin-left: 25%;\n}\n.columns.is-mobile > .column.is-offset-one-fifth {\n  margin-left: 20%;\n}\n.columns.is-mobile > .column.is-offset-two-fifths {\n  margin-left: 40%;\n}\n.columns.is-mobile > .column.is-offset-three-fifths {\n  margin-left: 60%;\n}\n.columns.is-mobile > .column.is-offset-four-fifths {\n  margin-left: 80%;\n}\n.columns.is-mobile > .column.is-0 {\n  flex: none;\n  width: 0%;\n}\n.columns.is-mobile > .column.is-offset-0 {\n  margin-left: 0%;\n}\n.columns.is-mobile > .column.is-1 {\n  flex: none;\n  width: 8.3333333333%;\n}\n.columns.is-mobile > .column.is-offset-1 {\n  margin-left: 8.3333333333%;\n}\n.columns.is-mobile > .column.is-2 {\n  flex: none;\n  width: 16.6666666667%;\n}\n.columns.is-mobile > .column.is-offset-2 {\n  margin-left: 16.6666666667%;\n}\n.columns.is-mobile > .column.is-3 {\n  flex: none;\n  width: 25%;\n}\n.columns.is-mobile > .column.is-offset-3 {\n  margin-left: 25%;\n}\n.columns.is-mobile > .column.is-4 {\n  flex: none;\n  width: 33.3333333333%;\n}\n.columns.is-mobile > .column.is-offset-4 {\n  margin-left: 33.3333333333%;\n}\n.columns.is-mobile > .column.is-5 {\n  flex: none;\n  width: 41.6666666667%;\n}\n.columns.is-mobile > .column.is-offset-5 {\n  margin-left: 41.6666666667%;\n}\n.columns.is-mobile > .column.is-6 {\n  flex: none;\n  width: 50%;\n}\n.columns.is-mobile > .column.is-offset-6 {\n  margin-left: 50%;\n}\n.columns.is-mobile > .column.is-7 {\n  flex: none;\n  width: 58.3333333333%;\n}\n.columns.is-mobile > .column.is-offset-7 {\n  margin-left: 58.3333333333%;\n}\n.columns.is-mobile > .column.is-8 {\n  flex: none;\n  width: 66.6666666667%;\n}\n.columns.is-mobile > .column.is-offset-8 {\n  margin-left: 66.6666666667%;\n}\n.columns.is-mobile > .column.is-9 {\n  flex: none;\n  width: 75%;\n}\n.columns.is-mobile > .column.is-offset-9 {\n  margin-left: 75%;\n}\n.columns.is-mobile > .column.is-10 {\n  flex: none;\n  width: 83.3333333333%;\n}\n.columns.is-mobile > .column.is-offset-10 {\n  margin-left: 83.3333333333%;\n}\n.columns.is-mobile > .column.is-11 {\n  flex: none;\n  width: 91.6666666667%;\n}\n.columns.is-mobile > .column.is-offset-11 {\n  margin-left: 91.6666666667%;\n}\n.columns.is-mobile > .column.is-12 {\n  flex: none;\n  width: 100%;\n}\n.columns.is-mobile > .column.is-offset-12 {\n  margin-left: 100%;\n}\n@media screen and (max-width: 768px) {\n  .column.is-narrow-mobile {\n    flex: none;\n  }\n  .column.is-full-mobile {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-mobile {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-mobile {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-mobile {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-mobile {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-mobile {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-mobile {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-mobile {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-mobile {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-mobile {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-mobile {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-mobile {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-mobile {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-mobile {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-mobile {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-mobile {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-mobile {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-mobile {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-mobile {\n    margin-left: 80%;\n  }\n  .column.is-0-mobile {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-mobile {\n    margin-left: 0%;\n  }\n  .column.is-1-mobile {\n    flex: none;\n    width: 8.3333333333%;\n  }\n  .column.is-offset-1-mobile {\n    margin-left: 8.3333333333%;\n  }\n  .column.is-2-mobile {\n    flex: none;\n    width: 16.6666666667%;\n  }\n  .column.is-offset-2-mobile {\n    margin-left: 16.6666666667%;\n  }\n  .column.is-3-mobile {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-mobile {\n    margin-left: 25%;\n  }\n  .column.is-4-mobile {\n    flex: none;\n    width: 33.3333333333%;\n  }\n  .column.is-offset-4-mobile {\n    margin-left: 33.3333333333%;\n  }\n  .column.is-5-mobile {\n    flex: none;\n    width: 41.6666666667%;\n  }\n  .column.is-offset-5-mobile {\n    margin-left: 41.6666666667%;\n  }\n  .column.is-6-mobile {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-mobile {\n    margin-left: 50%;\n  }\n  .column.is-7-mobile {\n    flex: none;\n    width: 58.3333333333%;\n  }\n  .column.is-offset-7-mobile {\n    margin-left: 58.3333333333%;\n  }\n  .column.is-8-mobile {\n    flex: none;\n    width: 66.6666666667%;\n  }\n  .column.is-offset-8-mobile {\n    margin-left: 66.6666666667%;\n  }\n  .column.is-9-mobile {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-mobile {\n    margin-left: 75%;\n  }\n  .column.is-10-mobile {\n    flex: none;\n    width: 83.3333333333%;\n  }\n  .column.is-offset-10-mobile {\n    margin-left: 83.3333333333%;\n  }\n  .column.is-11-mobile {\n    flex: none;\n    width: 91.6666666667%;\n  }\n  .column.is-offset-11-mobile {\n    margin-left: 91.6666666667%;\n  }\n  .column.is-12-mobile {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-mobile {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .column.is-narrow, .column.is-narrow-tablet {\n    flex: none;\n  }\n  .column.is-full, .column.is-full-tablet {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters, .column.is-three-quarters-tablet {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds, .column.is-two-thirds-tablet {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half, .column.is-half-tablet {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third, .column.is-one-third-tablet {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter, .column.is-one-quarter-tablet {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth, .column.is-one-fifth-tablet {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths, .column.is-two-fifths-tablet {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths, .column.is-three-fifths-tablet {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths, .column.is-four-fifths-tablet {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half, .column.is-offset-half-tablet {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n    margin-left: 80%;\n  }\n  .column.is-0, .column.is-0-tablet {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0, .column.is-offset-0-tablet {\n    margin-left: 0%;\n  }\n  .column.is-1, .column.is-1-tablet {\n    flex: none;\n    width: 8.3333333333%;\n  }\n  .column.is-offset-1, .column.is-offset-1-tablet {\n    margin-left: 8.3333333333%;\n  }\n  .column.is-2, .column.is-2-tablet {\n    flex: none;\n    width: 16.6666666667%;\n  }\n  .column.is-offset-2, .column.is-offset-2-tablet {\n    margin-left: 16.6666666667%;\n  }\n  .column.is-3, .column.is-3-tablet {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3, .column.is-offset-3-tablet {\n    margin-left: 25%;\n  }\n  .column.is-4, .column.is-4-tablet {\n    flex: none;\n    width: 33.3333333333%;\n  }\n  .column.is-offset-4, .column.is-offset-4-tablet {\n    margin-left: 33.3333333333%;\n  }\n  .column.is-5, .column.is-5-tablet {\n    flex: none;\n    width: 41.6666666667%;\n  }\n  .column.is-offset-5, .column.is-offset-5-tablet {\n    margin-left: 41.6666666667%;\n  }\n  .column.is-6, .column.is-6-tablet {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6, .column.is-offset-6-tablet {\n    margin-left: 50%;\n  }\n  .column.is-7, .column.is-7-tablet {\n    flex: none;\n    width: 58.3333333333%;\n  }\n  .column.is-offset-7, .column.is-offset-7-tablet {\n    margin-left: 58.3333333333%;\n  }\n  .column.is-8, .column.is-8-tablet {\n    flex: none;\n    width: 66.6666666667%;\n  }\n  .column.is-offset-8, .column.is-offset-8-tablet {\n    margin-left: 66.6666666667%;\n  }\n  .column.is-9, .column.is-9-tablet {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9, .column.is-offset-9-tablet {\n    margin-left: 75%;\n  }\n  .column.is-10, .column.is-10-tablet {\n    flex: none;\n    width: 83.3333333333%;\n  }\n  .column.is-offset-10, .column.is-offset-10-tablet {\n    margin-left: 83.3333333333%;\n  }\n  .column.is-11, .column.is-11-tablet {\n    flex: none;\n    width: 91.6666666667%;\n  }\n  .column.is-offset-11, .column.is-offset-11-tablet {\n    margin-left: 91.6666666667%;\n  }\n  .column.is-12, .column.is-12-tablet {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12, .column.is-offset-12-tablet {\n    margin-left: 100%;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .column.is-narrow-touch {\n    flex: none;\n  }\n  .column.is-full-touch {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-touch {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-touch {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-touch {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-touch {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-touch {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-touch {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-touch {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-touch {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-touch {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-touch {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-touch {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-touch {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-touch {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-touch {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-touch {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-touch {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-touch {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-touch {\n    margin-left: 80%;\n  }\n  .column.is-0-touch {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-touch {\n    margin-left: 0%;\n  }\n  .column.is-1-touch {\n    flex: none;\n    width: 8.3333333333%;\n  }\n  .column.is-offset-1-touch {\n    margin-left: 8.3333333333%;\n  }\n  .column.is-2-touch {\n    flex: none;\n    width: 16.6666666667%;\n  }\n  .column.is-offset-2-touch {\n    margin-left: 16.6666666667%;\n  }\n  .column.is-3-touch {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-touch {\n    margin-left: 25%;\n  }\n  .column.is-4-touch {\n    flex: none;\n    width: 33.3333333333%;\n  }\n  .column.is-offset-4-touch {\n    margin-left: 33.3333333333%;\n  }\n  .column.is-5-touch {\n    flex: none;\n    width: 41.6666666667%;\n  }\n  .column.is-offset-5-touch {\n    margin-left: 41.6666666667%;\n  }\n  .column.is-6-touch {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-touch {\n    margin-left: 50%;\n  }\n  .column.is-7-touch {\n    flex: none;\n    width: 58.3333333333%;\n  }\n  .column.is-offset-7-touch {\n    margin-left: 58.3333333333%;\n  }\n  .column.is-8-touch {\n    flex: none;\n    width: 66.6666666667%;\n  }\n  .column.is-offset-8-touch {\n    margin-left: 66.6666666667%;\n  }\n  .column.is-9-touch {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-touch {\n    margin-left: 75%;\n  }\n  .column.is-10-touch {\n    flex: none;\n    width: 83.3333333333%;\n  }\n  .column.is-offset-10-touch {\n    margin-left: 83.3333333333%;\n  }\n  .column.is-11-touch {\n    flex: none;\n    width: 91.6666666667%;\n  }\n  .column.is-offset-11-touch {\n    margin-left: 91.6666666667%;\n  }\n  .column.is-12-touch {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-touch {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .column.is-narrow-desktop {\n    flex: none;\n  }\n  .column.is-full-desktop {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-desktop {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-desktop {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-desktop {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-desktop {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-desktop {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-desktop {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-desktop {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-desktop {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-desktop {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-desktop {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-desktop {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-desktop {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-desktop {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-desktop {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-desktop {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-desktop {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-desktop {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-desktop {\n    margin-left: 80%;\n  }\n  .column.is-0-desktop {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-desktop {\n    margin-left: 0%;\n  }\n  .column.is-1-desktop {\n    flex: none;\n    width: 8.3333333333%;\n  }\n  .column.is-offset-1-desktop {\n    margin-left: 8.3333333333%;\n  }\n  .column.is-2-desktop {\n    flex: none;\n    width: 16.6666666667%;\n  }\n  .column.is-offset-2-desktop {\n    margin-left: 16.6666666667%;\n  }\n  .column.is-3-desktop {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-desktop {\n    margin-left: 25%;\n  }\n  .column.is-4-desktop {\n    flex: none;\n    width: 33.3333333333%;\n  }\n  .column.is-offset-4-desktop {\n    margin-left: 33.3333333333%;\n  }\n  .column.is-5-desktop {\n    flex: none;\n    width: 41.6666666667%;\n  }\n  .column.is-offset-5-desktop {\n    margin-left: 41.6666666667%;\n  }\n  .column.is-6-desktop {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-desktop {\n    margin-left: 50%;\n  }\n  .column.is-7-desktop {\n    flex: none;\n    width: 58.3333333333%;\n  }\n  .column.is-offset-7-desktop {\n    margin-left: 58.3333333333%;\n  }\n  .column.is-8-desktop {\n    flex: none;\n    width: 66.6666666667%;\n  }\n  .column.is-offset-8-desktop {\n    margin-left: 66.6666666667%;\n  }\n  .column.is-9-desktop {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-desktop {\n    margin-left: 75%;\n  }\n  .column.is-10-desktop {\n    flex: none;\n    width: 83.3333333333%;\n  }\n  .column.is-offset-10-desktop {\n    margin-left: 83.3333333333%;\n  }\n  .column.is-11-desktop {\n    flex: none;\n    width: 91.6666666667%;\n  }\n  .column.is-offset-11-desktop {\n    margin-left: 91.6666666667%;\n  }\n  .column.is-12-desktop {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-desktop {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .column.is-narrow-widescreen {\n    flex: none;\n  }\n  .column.is-full-widescreen {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-widescreen {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-widescreen {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-widescreen {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-widescreen {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-widescreen {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-widescreen {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-widescreen {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-widescreen {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-widescreen {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-widescreen {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-widescreen {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-widescreen {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-widescreen {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-widescreen {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-widescreen {\n    margin-left: 80%;\n  }\n  .column.is-0-widescreen {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-widescreen {\n    margin-left: 0%;\n  }\n  .column.is-1-widescreen {\n    flex: none;\n    width: 8.3333333333%;\n  }\n  .column.is-offset-1-widescreen {\n    margin-left: 8.3333333333%;\n  }\n  .column.is-2-widescreen {\n    flex: none;\n    width: 16.6666666667%;\n  }\n  .column.is-offset-2-widescreen {\n    margin-left: 16.6666666667%;\n  }\n  .column.is-3-widescreen {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-4-widescreen {\n    flex: none;\n    width: 33.3333333333%;\n  }\n  .column.is-offset-4-widescreen {\n    margin-left: 33.3333333333%;\n  }\n  .column.is-5-widescreen {\n    flex: none;\n    width: 41.6666666667%;\n  }\n  .column.is-offset-5-widescreen {\n    margin-left: 41.6666666667%;\n  }\n  .column.is-6-widescreen {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-7-widescreen {\n    flex: none;\n    width: 58.3333333333%;\n  }\n  .column.is-offset-7-widescreen {\n    margin-left: 58.3333333333%;\n  }\n  .column.is-8-widescreen {\n    flex: none;\n    width: 66.6666666667%;\n  }\n  .column.is-offset-8-widescreen {\n    margin-left: 66.6666666667%;\n  }\n  .column.is-9-widescreen {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-10-widescreen {\n    flex: none;\n    width: 83.3333333333%;\n  }\n  .column.is-offset-10-widescreen {\n    margin-left: 83.3333333333%;\n  }\n  .column.is-11-widescreen {\n    flex: none;\n    width: 91.6666666667%;\n  }\n  .column.is-offset-11-widescreen {\n    margin-left: 91.6666666667%;\n  }\n  .column.is-12-widescreen {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-widescreen {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .column.is-narrow-fullhd {\n    flex: none;\n  }\n  .column.is-full-fullhd {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-fullhd {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-fullhd {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-fullhd {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-fullhd {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-fullhd {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-fullhd {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-fullhd {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-fullhd {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-fullhd {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-fullhd {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-fullhd {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-fullhd {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-fullhd {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-fullhd {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-fullhd {\n    margin-left: 80%;\n  }\n  .column.is-0-fullhd {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-fullhd {\n    margin-left: 0%;\n  }\n  .column.is-1-fullhd {\n    flex: none;\n    width: 8.3333333333%;\n  }\n  .column.is-offset-1-fullhd {\n    margin-left: 8.3333333333%;\n  }\n  .column.is-2-fullhd {\n    flex: none;\n    width: 16.6666666667%;\n  }\n  .column.is-offset-2-fullhd {\n    margin-left: 16.6666666667%;\n  }\n  .column.is-3-fullhd {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-4-fullhd {\n    flex: none;\n    width: 33.3333333333%;\n  }\n  .column.is-offset-4-fullhd {\n    margin-left: 33.3333333333%;\n  }\n  .column.is-5-fullhd {\n    flex: none;\n    width: 41.6666666667%;\n  }\n  .column.is-offset-5-fullhd {\n    margin-left: 41.6666666667%;\n  }\n  .column.is-6-fullhd {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-7-fullhd {\n    flex: none;\n    width: 58.3333333333%;\n  }\n  .column.is-offset-7-fullhd {\n    margin-left: 58.3333333333%;\n  }\n  .column.is-8-fullhd {\n    flex: none;\n    width: 66.6666666667%;\n  }\n  .column.is-offset-8-fullhd {\n    margin-left: 66.6666666667%;\n  }\n  .column.is-9-fullhd {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-10-fullhd {\n    flex: none;\n    width: 83.3333333333%;\n  }\n  .column.is-offset-10-fullhd {\n    margin-left: 83.3333333333%;\n  }\n  .column.is-11-fullhd {\n    flex: none;\n    width: 91.6666666667%;\n  }\n  .column.is-offset-11-fullhd {\n    margin-left: 91.6666666667%;\n  }\n  .column.is-12-fullhd {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-fullhd {\n    margin-left: 100%;\n  }\n}\n\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.columns:last-child {\n  margin-bottom: -0.75rem;\n}\n.columns:not(:last-child) {\n  margin-bottom: calc(1.5rem - 0.75rem);\n}\n.columns.is-centered {\n  justify-content: center;\n}\n.columns.is-gapless {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n}\n.columns.is-gapless > .column {\n  margin: 0;\n  padding: 0 !important;\n}\n.columns.is-gapless:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.columns.is-gapless:last-child {\n  margin-bottom: 0;\n}\n.columns.is-mobile {\n  display: flex;\n}\n.columns.is-multiline {\n  flex-wrap: wrap;\n}\n.columns.is-vcentered {\n  align-items: center;\n}\n@media screen and (min-width: 769px), print {\n  .columns:not(.is-desktop) {\n    display: flex;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-desktop {\n    display: flex;\n  }\n}\n\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap));\n}\n.columns.is-variable .column {\n  padding-left: var(--columnGap);\n  padding-right: var(--columnGap);\n}\n.columns.is-variable.is-0 {\n  --columnGap: 0rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-0-mobile {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-0-tablet {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-0-tablet-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-0-touch {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-0-desktop {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-0-desktop-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-0-widescreen {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-0-widescreen-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-0-fullhd {\n    --columnGap: 0rem;\n  }\n}\n.columns.is-variable.is-1 {\n  --columnGap: 0.25rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-1-mobile {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-1-tablet {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-1-tablet-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-1-touch {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-1-desktop {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-1-desktop-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-1-widescreen {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-1-widescreen-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-1-fullhd {\n    --columnGap: 0.25rem;\n  }\n}\n.columns.is-variable.is-2 {\n  --columnGap: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-2-mobile {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-2-tablet {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-2-tablet-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-2-touch {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-2-desktop {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-2-desktop-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-2-widescreen {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-2-widescreen-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-2-fullhd {\n    --columnGap: 0.5rem;\n  }\n}\n.columns.is-variable.is-3 {\n  --columnGap: 0.75rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-3-mobile {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-3-tablet {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-3-tablet-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-3-touch {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-3-desktop {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-3-desktop-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-3-widescreen {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-3-widescreen-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-3-fullhd {\n    --columnGap: 0.75rem;\n  }\n}\n.columns.is-variable.is-4 {\n  --columnGap: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-4-mobile {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-4-tablet {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-4-tablet-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-4-touch {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-4-desktop {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-4-desktop-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-4-widescreen {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-4-widescreen-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-4-fullhd {\n    --columnGap: 1rem;\n  }\n}\n.columns.is-variable.is-5 {\n  --columnGap: 1.25rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-5-mobile {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-5-tablet {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-5-tablet-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-5-touch {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-5-desktop {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-5-desktop-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-5-widescreen {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-5-widescreen-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-5-fullhd {\n    --columnGap: 1.25rem;\n  }\n}\n.columns.is-variable.is-6 {\n  --columnGap: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-6-mobile {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-6-tablet {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-6-tablet-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-6-touch {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-6-desktop {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-6-desktop-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-6-widescreen {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-6-widescreen-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-6-fullhd {\n    --columnGap: 1.5rem;\n  }\n}\n.columns.is-variable.is-7 {\n  --columnGap: 1.75rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-7-mobile {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-7-tablet {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-7-tablet-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-7-touch {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-7-desktop {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-7-desktop-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-7-widescreen {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-7-widescreen-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-7-fullhd {\n    --columnGap: 1.75rem;\n  }\n}\n.columns.is-variable.is-8 {\n  --columnGap: 2rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-8-mobile {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-8-tablet {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-8-tablet-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-8-touch {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-8-desktop {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-8-desktop-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-8-widescreen {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-8-widescreen-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-8-fullhd {\n    --columnGap: 2rem;\n  }\n}\n\n.tile {\n  align-items: stretch;\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: min-content;\n}\n.tile.is-ancestor {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.tile.is-ancestor:last-child {\n  margin-bottom: -0.75rem;\n}\n.tile.is-ancestor:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.tile.is-child {\n  margin: 0 !important;\n}\n.tile.is-parent {\n  padding: 0.75rem;\n}\n.tile.is-vertical {\n  flex-direction: column;\n}\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n  margin-bottom: 1.5rem !important;\n}\n@media screen and (min-width: 769px), print {\n  .tile:not(.is-child) {\n    display: flex;\n  }\n  .tile.is-1 {\n    flex: none;\n    width: 8.3333333333%;\n  }\n  .tile.is-2 {\n    flex: none;\n    width: 16.6666666667%;\n  }\n  .tile.is-3 {\n    flex: none;\n    width: 25%;\n  }\n  .tile.is-4 {\n    flex: none;\n    width: 33.3333333333%;\n  }\n  .tile.is-5 {\n    flex: none;\n    width: 41.6666666667%;\n  }\n  .tile.is-6 {\n    flex: none;\n    width: 50%;\n  }\n  .tile.is-7 {\n    flex: none;\n    width: 58.3333333333%;\n  }\n  .tile.is-8 {\n    flex: none;\n    width: 66.6666666667%;\n  }\n  .tile.is-9 {\n    flex: none;\n    width: 75%;\n  }\n  .tile.is-10 {\n    flex: none;\n    width: 83.3333333333%;\n  }\n  .tile.is-11 {\n    flex: none;\n    width: 91.6666666667%;\n  }\n  .tile.is-12 {\n    flex: none;\n    width: 100%;\n  }\n}\n\n.hero {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.hero .navbar {\n  background: none;\n}\n.hero .tabs ul {\n  border-bottom: none;\n}\n.hero.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-white strong {\n  color: inherit;\n}\n.hero.is-white .title {\n  color: #0a0a0a;\n}\n.hero.is-white .subtitle {\n  color: rgba(10, 10, 10, 0.9);\n}\n.hero.is-white .subtitle a:not(.button),\n.hero.is-white .subtitle strong {\n  color: #0a0a0a;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-white .navbar-menu {\n    background-color: white;\n  }\n}\n.hero.is-white .navbar-item,\n.hero.is-white .navbar-link {\n  color: rgba(10, 10, 10, 0.7);\n}\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n.hero.is-white .navbar-link:hover,\n.hero.is-white .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n.hero.is-white .tabs a {\n  color: #0a0a0a;\n  opacity: 0.9;\n}\n.hero.is-white .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-white .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n  color: #0a0a0a;\n}\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.hero.is-white.is-bold {\n  background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-white.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);\n  }\n}\n.hero.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-black strong {\n  color: inherit;\n}\n.hero.is-black .title {\n  color: white;\n}\n.hero.is-black .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-black .subtitle a:not(.button),\n.hero.is-black .subtitle strong {\n  color: white;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-black .navbar-menu {\n    background-color: #0a0a0a;\n  }\n}\n.hero.is-black .navbar-item,\n.hero.is-black .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n.hero.is-black .navbar-link:hover,\n.hero.is-black .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n.hero.is-black .tabs a {\n  color: white;\n  opacity: 0.9;\n}\n.hero.is-black .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-black .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n  color: white;\n}\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.hero.is-black.is-bold {\n  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-black.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n  }\n}\n.hero.is-light {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-light strong {\n  color: inherit;\n}\n.hero.is-light .title {\n  color: #363636;\n}\n.hero.is-light .subtitle {\n  color: rgba(54, 54, 54, 0.9);\n}\n.hero.is-light .subtitle a:not(.button),\n.hero.is-light .subtitle strong {\n  color: #363636;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-light .navbar-menu {\n    background-color: whitesmoke;\n  }\n}\n.hero.is-light .navbar-item,\n.hero.is-light .navbar-link {\n  color: rgba(54, 54, 54, 0.7);\n}\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n.hero.is-light .navbar-link:hover,\n.hero.is-light .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.hero.is-light .tabs a {\n  color: #363636;\n  opacity: 0.9;\n}\n.hero.is-light .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-light .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n  color: #363636;\n}\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n  background-color: #363636;\n  border-color: #363636;\n  color: whitesmoke;\n}\n.hero.is-light.is-bold {\n  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-light.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n  }\n}\n.hero.is-dark {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-dark strong {\n  color: inherit;\n}\n.hero.is-dark .title {\n  color: whitesmoke;\n}\n.hero.is-dark .subtitle {\n  color: rgba(245, 245, 245, 0.9);\n}\n.hero.is-dark .subtitle a:not(.button),\n.hero.is-dark .subtitle strong {\n  color: whitesmoke;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-dark .navbar-menu {\n    background-color: #363636;\n  }\n}\n.hero.is-dark .navbar-item,\n.hero.is-dark .navbar-link {\n  color: rgba(245, 245, 245, 0.7);\n}\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n.hero.is-dark .navbar-link:hover,\n.hero.is-dark .navbar-link.is-active {\n  background-color: #292929;\n  color: whitesmoke;\n}\n.hero.is-dark .tabs a {\n  color: whitesmoke;\n  opacity: 0.9;\n}\n.hero.is-dark .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-dark .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n  color: whitesmoke;\n}\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: #363636;\n}\n.hero.is-dark.is-bold {\n  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-dark.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n  }\n}\n.hero.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-primary strong {\n  color: inherit;\n}\n.hero.is-primary .title {\n  color: #fff;\n}\n.hero.is-primary .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-primary .subtitle a:not(.button),\n.hero.is-primary .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-primary .navbar-menu {\n    background-color: #00d1b2;\n  }\n}\n.hero.is-primary .navbar-item,\n.hero.is-primary .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n.hero.is-primary .navbar-link:hover,\n.hero.is-primary .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff;\n}\n.hero.is-primary .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-primary .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-primary .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #00d1b2;\n}\n.hero.is-primary.is-bold {\n  background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-primary.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n  }\n}\n.hero.is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-link strong {\n  color: inherit;\n}\n.hero.is-link .title {\n  color: #fff;\n}\n.hero.is-link .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-link .subtitle a:not(.button),\n.hero.is-link .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-link .navbar-menu {\n    background-color: #3273dc;\n  }\n}\n.hero.is-link .navbar-item,\n.hero.is-link .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n.hero.is-link .navbar-link:hover,\n.hero.is-link .navbar-link.is-active {\n  background-color: #2366d1;\n  color: #fff;\n}\n.hero.is-link .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-link .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-link .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #3273dc;\n}\n.hero.is-link.is-bold {\n  background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-link.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n  }\n}\n.hero.is-info {\n  background-color: #209cee;\n  color: #fff;\n}\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-info strong {\n  color: inherit;\n}\n.hero.is-info .title {\n  color: #fff;\n}\n.hero.is-info .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-info .subtitle a:not(.button),\n.hero.is-info .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-info .navbar-menu {\n    background-color: #209cee;\n  }\n}\n.hero.is-info .navbar-item,\n.hero.is-info .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n.hero.is-info .navbar-link:hover,\n.hero.is-info .navbar-link.is-active {\n  background-color: #118fe4;\n  color: #fff;\n}\n.hero.is-info .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-info .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-info .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #209cee;\n}\n.hero.is-info.is-bold {\n  background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-info.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);\n  }\n}\n.hero.is-success {\n  background-color: #23d160;\n  color: #fff;\n}\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-success strong {\n  color: inherit;\n}\n.hero.is-success .title {\n  color: #fff;\n}\n.hero.is-success .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-success .subtitle a:not(.button),\n.hero.is-success .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-success .navbar-menu {\n    background-color: #23d160;\n  }\n}\n.hero.is-success .navbar-item,\n.hero.is-success .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n.hero.is-success .navbar-link:hover,\n.hero.is-success .navbar-link.is-active {\n  background-color: #20bc56;\n  color: #fff;\n}\n.hero.is-success .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-success .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-success .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #23d160;\n}\n.hero.is-success.is-bold {\n  background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-success.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);\n  }\n}\n.hero.is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-warning strong {\n  color: inherit;\n}\n.hero.is-warning .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n.hero.is-warning .subtitle a:not(.button),\n.hero.is-warning .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-warning .navbar-menu {\n    background-color: #ffdd57;\n  }\n}\n.hero.is-warning .navbar-item,\n.hero.is-warning .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n.hero.is-warning .navbar-link:hover,\n.hero.is-warning .navbar-link.is-active {\n  background-color: #ffd83d;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n.hero.is-warning .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-warning .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: #ffdd57;\n}\n.hero.is-warning.is-bold {\n  background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-warning.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n  }\n}\n.hero.is-danger {\n  background-color: #ff3860;\n  color: #fff;\n}\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-danger strong {\n  color: inherit;\n}\n.hero.is-danger .title {\n  color: #fff;\n}\n.hero.is-danger .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-danger .subtitle a:not(.button),\n.hero.is-danger .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-danger .navbar-menu {\n    background-color: #ff3860;\n  }\n}\n.hero.is-danger .navbar-item,\n.hero.is-danger .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n.hero.is-danger .navbar-link:hover,\n.hero.is-danger .navbar-link.is-active {\n  background-color: #ff1f4b;\n  color: #fff;\n}\n.hero.is-danger .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-danger .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-danger .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #ff3860;\n}\n.hero.is-danger.is-bold {\n  background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-danger.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%);\n  }\n}\n.hero.is-small .hero-body {\n  padding-bottom: 1.5rem;\n  padding-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .hero.is-medium .hero-body {\n    padding-bottom: 9rem;\n    padding-top: 9rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .hero.is-large .hero-body {\n    padding-bottom: 18rem;\n    padding-top: 18rem;\n  }\n}\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {\n  align-items: center;\n  display: flex;\n}\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.hero.is-halfheight {\n  min-height: 50vh;\n}\n.hero.is-fullheight {\n  min-height: 100vh;\n}\n\n.hero-video {\n  overflow: hidden;\n}\n.hero-video video {\n  left: 50%;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n.hero-video.is-transparent {\n  opacity: 0.3;\n}\n@media screen and (max-width: 768px) {\n  .hero-video {\n    display: none;\n  }\n}\n\n.hero-buttons {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .hero-buttons .button {\n    display: flex;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .hero-buttons {\n    display: flex;\n    justify-content: center;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-right: 1.5rem;\n  }\n}\n\n.hero-head,\n.hero-foot {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.hero-body {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n}\n\n.section {\n  padding: 3rem 1.5rem;\n}\n@media screen and (min-width: 1024px) {\n  .section.is-medium {\n    padding: 9rem 1.5rem;\n  }\n  .section.is-large {\n    padding: 18rem 1.5rem;\n  }\n}\n\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem;\n}";
  styleInject(css);

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral(["<App id=\"app\"/>"]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$7() {
    var data = _taggedTemplateLiteral(["\n        <Header props=\"", "\"\n            class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\"/>\n        <Main class=\"section\" active-page=\"Todo\"/>\n        <Footer class=\"footer\"/>\n      "]);

    _templateObject$7 = function _templateObject() {
      return data;
    };

    return data;
  }
  var App = {
    includes: {
      Header: Header,
      Main: Main,
      Footer: Footer
    },
    oninit: function oninit() {
      this.handleMenu = this.handleMenu.bind(this);
    },
    handleMenu: function handleMenu(e) {
      this.querySelector(".section").setAttribute('active-page', e.target.text);
    },
    render: function render() {
      this.html(_templateObject$7(), {
        handleMenu: this.handleMenu
      });
    }
  };
  define('App', App);
  render(document.body, html(_templateObject2$1()));

}());
