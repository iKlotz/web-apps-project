// import React, { useContext, useRef, useEffect } from 'react';
// import ProductContext from '../../context/product/productContext';
//
// const ProductFilterNavbar = () => {
//     const productContext = useContext(ProductContext);
//     const text = useRef('');
//     const {filterProducts, clearFilter, filtered } = productContext;
//
//     useEffect(() => {
//         if(filtered === null){
//             text.current.value = '';
//         }
//     });
//
//     const onChange = e => {
//         if(text.current.value !== ''){
//             filterProducts(e.target.value); //which is the actual text
//         } else {
//             clearFilter();
//         }
//     };
//
//     return (
//         <form className="form-inline search">
//             <input
//                 className="form-control mr-sm-2"
//                 ref={text} type="text"
//                 placeholder="Search products..."
//                 onChange={onChange}
//             />
//         </form>
//         // <div className="my-search-input">
//         // <form className="form-inline search">
//         // <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//         // </form>
// // </div>
//
//     );
// };
//
// export default ProductFilterNavbar;