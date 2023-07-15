const str = `<pre><code class="language-tsx">
export default function Button({ children, onClick, className, style }: IButton) {
  const btnRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const dom = btnRef.current as HTMLDivElement;

    const handleStart = () => dom.style.transform = 'scale(0.9)';
    const handleEnd = () => dom.style.transform = 'scale(1)';

    dom.addEventListener('touchstart', handleStart)
    document.addEventListener('touchend', handleEnd)
    return () => {
      dom.removeEventListener('touchstart', handleStart);
      document.removeEventListener('touchend', handleEnd);
    }
  }, [])
  return <div
    style={style}
    className={classnames('btn', className)}
    onClick={onClick}
    ref={btnRef}
  >
    {children}
  </div>
}
</code></pre>`

console.log(
  str.replace(/(?<=(<code[^>]*?>|\n)).*?(?=\n(<\/code>))/g, str => `{${str}}`)
);