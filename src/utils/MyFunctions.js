export const verticalScroll = (ref)=>{
    const scrollHeight = ref.current.scrollHeight;
    const scroll = ref.current.scrollTop;
    let result = scrollHeight - scroll;
    
    return result

  }
  export  const handleScrollDown = (ref) => {
    const height = ref.current.scrollHeight;
    ref.current?.scrollTo({ top: height, left: 0, behavior: "smooth" });
  };