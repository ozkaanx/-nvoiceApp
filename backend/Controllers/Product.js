export async function addData(req, res) {
  const data = req.body.saveItem;
  try {
    console.log({ data });
  } catch (error) {
    res.json({ message: error.message });
  }
}

export async function getData(req, res) {
  try {
  } catch (error) {}
}
