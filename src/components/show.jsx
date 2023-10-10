import Side_menu from './side_menu';

function Show() {
  return (
    <div className="d-flex vh-100">
      <Side_menu> </Side_menu>

      <div className="d-flex justify-content-strech bg-dark w-100">

        <div className="bg-primary w-50 vh-100">
          <div className="d-flex align-items-center justify-content-center vh-100">
            <img src="https://picsum.photos/id/1/300/300" alt="" />
          </div>
        </div>

        <div className="bg-succes w-50">
          <div className="d-flex bg-success align-items-center justify-content-center flex-column vh-100">
            <h2>Vespa 946</h2>
            <div className="table-responsive">
              <table className="table table-primary">
                <thead>
                  <tr>
                    <th scope="col">  </th>
                    <th scope="col">Column 2</th>
                    <th scope="col">Column 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td scope="row">R1C1</td>
                    <td>R1C2</td>
                    <td>R1C3</td>
                  </tr>
                  <tr className="">
                    <td scope="row">Item</td>
                    <td>Item</td>
                    <td>Item</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Show;
