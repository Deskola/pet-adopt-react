import { useState } from "react";

const SearchParams = () => {

    const [location, setLocation] = useState("");

    return (
        <div className="search-params">
            
            <form action="">
                <label htmlFor="location">Location</label>
                <input
                    onChange={e => setLocation(e.target.value)}
                    type="text"
                    id="location"
                    value={location}
                    placeholder="Location" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SearchParams;