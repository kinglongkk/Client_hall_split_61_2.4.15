/**
 * 全局错误处理器
 * 用于捕获未处理的Promise拒绝和其他全局错误
 */

cc.Class({
    extends: cc.Component,

    onLoad() {
        this.setupGlobalErrorHandlers();
    },

    setupGlobalErrorHandlers() {
        // 处理未捕获的Promise拒绝
        if (typeof window !== 'undefined' && window.addEventListener) {
            window.addEventListener('unhandledrejection', (event) => {
                console.error('[GlobalErrorHandler] Unhandled promise rejection:', event.reason);
                
                // 检查是否是_renderFlag相关的错误
                if (event.reason && event.reason.message && 
                    event.reason.message.includes('_renderFlag')) {
                    console.warn('[GlobalErrorHandler] Detected _renderFlag error, this might be due to accessing destroyed UI components');
                }
                
                // 防止错误传播到控制台（可选）
                // event.preventDefault();
            });
        }

        // 处理其他全局错误
        if (typeof window !== 'undefined' && window.addEventListener) {
            window.addEventListener('error', (event) => {
                console.error('[GlobalErrorHandler] Global error:', event.error);
            });
        }

        console.log('[GlobalErrorHandler] Global error handlers initialized');
    }
});
