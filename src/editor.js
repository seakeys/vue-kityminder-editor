define(function(require, exports, module) {

    /**
     * 运行时
     */
    var runtimes = [];

    function assemble(runtime) {
        runtimes.push(runtime);
    }

    function KMEditor(selector) {
        this.selector = selector;
        for (var i = 0; i < runtimes.length; i++) {
            if (typeof runtimes[i] == 'function') {
                runtimes[i].call(this, this);
            }
        }
    }

    KMEditor.assemble = assemble;

    assemble(require('./runtime/container')); // 返回容器dom this.container
    assemble(require('./runtime/fsm')); // 编辑器状态机 jump  state   when
    assemble(require('./runtime/minder')); // 脑图示例运行时
    assemble(require('./runtime/receiver')); // 键盘事件接收/分发器
    assemble(require('./runtime/hotbox')); // 热盒 Runtime
    assemble(require('./runtime/input')); // 文本输入支持
    assemble(require('./runtime/clipboard-mimetype'));
    assemble(require('./runtime/clipboard'));
    assemble(require('./runtime/drag'));
    assemble(require('./runtime/node'));
    // assemble(require('./runtime/history'));
    assemble(require('./runtime/jumping'));
    // assemble(require('./runtime/priority'));
    // assemble(require('./runtime/progress'));
    // console.log(KMEditor)
    return module.exports = KMEditor;
});
