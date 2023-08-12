
function dbsensor() {
    return(
        <section class="part">
            <div class="title">
                <h4>Data sensor</h4>
            </div>
            <div class="center">
                <form>
                    <table class="table table-light">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th class="width-title-table">Room</th>
                                <th class="width-title-table">Temperature</th>
                                <th class="width-title-table">Humidity</th>
                                <th class="width-title-table">Gas</th>
                                <th class="width-title-table">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Living room</td>
                                <td>23,3<sup>o</sup>C</td>
                                <td>73,94<sup>o</sup>F</td>
                                <td>1%</td>
                                <td>
                                    <button><Link></Link></button>
                                    <button><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Kitchen</td>
                                <td>24.6<sup>o</sup>C</td>
                                <td>76.28<sup>o</sup>F</td>
                                <td>4%</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bed room</td>
                                <td>23,3<sup>o</sup>C</td>
                                <td>73.76<sup>o</sup>F</td>
                                <td>0%</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Master room</td>
                                <td>23,3<sup>o</sup>C</td>
                                <td>73.76<sup>o</sup>F</td>
                                <td>0%</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Garden</td>
                                <td>24,7<sup>o</sup>C</td>
                                <td>76.46<sup>o</sup>F</td>
                                <td>0%</td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </section>
    )
}

export default dbsensor