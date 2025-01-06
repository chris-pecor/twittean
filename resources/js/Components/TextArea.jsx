import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextArea(
    { className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <textarea
            {...props}
            className={
                className
            }
            ref={localRef}
        />
    );
});
