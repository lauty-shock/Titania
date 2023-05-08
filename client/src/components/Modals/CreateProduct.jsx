import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { IoImageOutline } from "react-icons/io5";
import { BsTrash3 } from "react-icons/bs";
import css from "../../css/Modals/CreateProduct.module.css";
import { createProduct } from "../../redux/actions";
import { uploadFile } from '../../firebase/config'

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 4) {
    errors.name = "Must be 4 characters or more";
  }

  if (values.category === "select" || values.category === "") {
    errors.category = "Select category";
  }

  if (values.gender === "select" || values.gender === "") {
    errors.gender = "Select gender";
  }

  if (values.price <= 0) {
    errors.price = "Must be greater than 0";
  }

  if (values.sizes.length <= 0) {
    errors.sizes = "Add at least one size";
  }

  if (values.colors.every(element => element === "")) {
    errors.colors = "Add at least one image";
  }

  return errors;
};

export default function CreateProduct({ handleDetail }) {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      category: "",
      colors: ["", "", "", ""],
      gender: "",
      sizes: [],
      discount: 0,
    },
    validate,
    onSubmit: (values) => {
      Swal.fire({
        title: "Product created!",
        icon: "success",
      });
      // console.log(values);
      dispatch(createProduct(values))
      handleDetail()
    },
  });
  const [flag, setFlag] = useState(false);
  const [size, setSize] = useState({ stock: 0, size: "" });
  const [color, setColor] = useState(["", "", "", ""]);
  const gender = [
    { id: 1, gender: "Man" },
    { id: 2, gender: "Woman" },
    { id: 3, gender: "Unisex" },
  ];
  const categorys = [
    { id: 1, category: "Pants" },
    { id: 2, category: "T-shirts" },
    { id: 3, category: "Hoodie" },
    { id: 4, category: "Sneakers" },
  ];
  function handleChangeSize(e) {
    if (e.target.name === "size") {
      setSize({
        ...size,
        [e.target.name]: e.target.value.toUpperCase(),
      });
    }
    if (e.target.name === "stock") {
      setSize({
        ...size,
        [e.target.name]: e.target.value,
      });
    }
  }
  const addSize = () => {
    let repeated = false;

    if (size.size === "") {
      return alert("Enter a size");
    }

    formik.values.sizes.forEach((s) => {
      if (s.size === size.size) repeated = true;
    });

    if (repeated) {
      return alert("Repeated size");
    }
    // formik.values.sizes = [{ stock: 0, size: "M" }, { stock: 0, size: "S" }, { stock: 0, size: "XS" }];
    formik.values.sizes.push(size);
    formik.validateForm(formik.values);
    setSize({ stock: 0, size: "" });
  };
  const handleChangeColors = (e) => {
    const id = e.target.id;
    let aux = color;
    aux[id] = e.target.value;
    setColor([...aux])
  };
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const id = e.target.id;

    try {
      const result = await uploadFile(file);
      let aux = color;
      aux[id] = result;
      setColor([...aux])
      formik.values.colors = color;
    } catch (error) {
      console.error(error);
    }
  }
  function validarURL(url) {
    let patronURL = new RegExp('^((http|https)://)?([a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}(\\:[0-9]+)?(\\/[^\\s]*)?$', 'i');
    return patronURL.test(url);
  }
  const addColor = (e) => {
    const id = e.target.id;
    const flag = validarURL(color[id]);
    if (!flag) {
      return alert("URL invalide")
    }
    formik.values.colors = color;
    // formik.validateForm(formik.values);
  };
  function deleteSize(size) {
    const index = formik.values.sizes.findIndex(s => s.size === size);
    formik.values.sizes.splice(index, 1);
    setFlag(!flag)
  }
  const deleteColor = (id) => {
    let aux = color;
    aux[id] = "";
    setColor([...aux])
    formik.values.colors[id] = "";
  }

  return (
    <div className={css.center} onClick={handleDetail}>
      <form
        onSubmit={formik.handleSubmit}
        className={css.container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={css.containerImages}>
          <h1>PRODUCT IMAGES</h1>
          {formik.errors.colors ? (
            <span className={css.error}>{formik.errors.colors}</span>
          ) : null}
          <div className={css.containerInputsImg}>
            {formik.values.colors.map((c, index) => (
              <div key={index} className={css.containerimg}>
                {c ? (
                  <>
                    <img src={c} />
                    <div className={css.deleteImage}>
                      <button onClick={() => deleteColor(index)} ><BsTrash3 /></button>
                    </div>
                  </>
                ) : (
                  <>
                    <span className={css.noImage}>
                      <IoImageOutline />
                    </span>
                    <div className={css.addImage}>
                      <div>
                        <label htmlFor="url">URL image</label>
                        <input
                          type="text"
                          id={index}
                          onChange={handleChangeColors}
                          value={color[index]}
                        />
                        <button id={index} onClick={addColor}>Add</button>
                      </div>
                      <span>OR</span>
                      <input type="file" id={index} onChange={handleImageChange} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={css.containerData}>
          <center>
            <h1>PRODUCT DATA</h1>
          </center>
          <div className={css.containerInputsData}>
            <div>
              <label htmlFor="name">Product name</label>
              <input
                name="name"
                type="text"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <span className={css.error}>{formik.errors.name}</span>
              ) : null}
            </div>
            <div>
              <label>Product category</label>
              <select name="category" onChange={formik.handleChange}>
                <option value="select">Select category</option>
                {categorys.map((c) => (
                  <option key={c.id} value={c.category}>
                    {c.category}
                  </option>
                ))}
              </select>
              {formik.errors.category ? (
                <span className={css.error}>{formik.errors.category}</span>
              ) : null}
            </div>
            <div>
              <label>Product gender</label>
              <select name="gender" onChange={formik.handleChange}>
                <option value="select">Select gender</option>
                {gender.map((g) => (
                  <option key={g.id} value={g.gender}>
                    {g.gender}
                  </option>
                ))}
              </select>
              {formik.errors.gender ? (
                <span className={css.error}>{formik.errors.gender}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="price">Product price</label>
              <input
                name="price"
                type="number"
                id="price"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
              {formik.errors.price ? (
                <span className={css.error}>{formik.errors.price}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="discount">Product discount</label>
              <input
                name="discount"
                type="number"
                id="discount"
                onChange={formik.handleChange}
                value={formik.values.discount}
              />
            </div>
            <div>
              <label htmlFor="size">Product size</label>
              <input
                name="size"
                type="text"
                id="size"
                value={size.size}
                onChange={handleChangeSize}
              />
              {formik.errors.sizes ? (
                <span className={css.error}>{formik.errors.sizes}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="stock">Size in stock</label>
              <input
                name="stock"
                type="number"
                id="stock"
                value={size.stock}
                onChange={handleChangeSize}
              />
            </div>
            <div>
              <button type="button" className={css.enter} onClick={addSize}>
                ▶
              </button>
            </div>
            <div>
              {formik.values.sizes.map((s, index) => (
                <span className={css.size} key={index} onClick={() => deleteSize(s.size)} >{s.size}</span>
              ))}
            </div>
            <div>
              <button>Add Color</button>
              <button type="submit">Review</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
