import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css'
import axios from 'axios';
function LinkResult({ inputValue }) {
  const [shortLink, setShortLink] = useState("")
  const [copy, setCopy] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
      setShortLink(res.data.result.full_short_link)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopy(false);
    }, 1000);
    return () => clearTimeout(timer)
  }, [copy]);

  if (loading) {
    return <p className="noData">Loading...</p>
  }
  return (
    <>
      <div className='result'>
        <p >{shortLink}</p>
        <CopyToClipboard text={shortLink}
          onCopy={() => setCopy(true)}>
          <button className={copy ? "copied" : ""}>copy to Clipboard!</button>
        </CopyToClipboard>
      </div>

    </>
  )
}
export default LinkResult;


