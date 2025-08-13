function InsertItemForm() {
  return (
    <form>
      <label htmlFor="product">Prodotto</label>
      <input id="product" type="text" />
      <label htmlFor="price">Prezzo</label>
      <input id="price" type="number" />

      {/* need to map the array of all allergens but for now i keep this as a placeholder  */}
      <label htmlFor="" name="allergens">
        Allergeni
      </label>
      <input type="checkbox" />

      <button type="submit">Add</button>
    </form>
  );
}

export default InsertItemForm;
