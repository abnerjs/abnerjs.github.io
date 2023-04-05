import { useEffect } from "react";
import Header from "src/components/Header/Header";
import Navbar from "src/components/Navbar/Navbar";
import useTransitionStore from "src/store/storeConfig";


const Insumos = () => {
  const changeTransition = useTransitionStore((state) => state.change);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      changeTransition(0);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="insumos">
      <Navbar black />
      <Header work title="Insumos" />
    </div>
  );
}

export default Insumos;