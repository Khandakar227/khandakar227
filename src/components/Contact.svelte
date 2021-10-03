<script>
  import Loading from './Loading.svelte';

  let formData = {
    name: "",
    email: "",
    message: "",
  };
  let response = { error: "", data: "" };
  let loading = false;

  async function sendMessage(data) {
    const url = "https://khandakar227-contact.herokuapp.com";
    let error_data;

    const res = await fetch(`${url}/contact`,{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .catch((err) => {
      error_data = { error: err.message };
      return error_data;
    });

    const responseData = await res.json();

    console.log(responseData)

    return responseData || error_data;
  }

  const onSendMessage = async (e) => {
    if (formData.name && formData.email && formData.message) {
      try {
        loading = true;
        const res = await sendMessage(formData);
        if (res.error_data) {
          loading = false;
          response.error = res.error_data;
        } else {
          loading = false;
          response.data = res.message;
        }
      } catch (error) {
        loading = false;
        response.error = error;
      }
    }
    loading = false;
  };
</script>

<div style="position: relative;">
  {#if response.data}
    <div style="background:rgba(0,0,0,0.5); padding-top: 1rem;">
      <h2 style="text-align: center;">Message was sent successfully...</h2>
    </div>
  {:else}
    {#if loading}
      <div style="position: absolute;top:0;left:0;width:100%;height:100%;display:grid;place-items:center;backdrop-filter:blur(10px);">
        <Loading />
      </div>
    {/if}
    <form on:submit|preventDefault={(e) => onSendMessage(e)}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          autocomplete="username"
          bind:value={formData.name}
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autocomplete="email"
          bind:value={formData.email}
          required
        />
      </div>
      <div>
        <textarea name="message" placeholder="Message" bind:value={formData.message} required />
        {#if response.error}
          <p style="color: red;">{response.error}</p>
        {/if}
        <button type="submit" name="submit"> SEND </button>
      </div>
    </form>
  {/if}
</div>

<style>
  form {
    padding: 1rem;
  }
  form div {
    padding: 1rem 0;
  }

  input:not([type="file"]),
  textarea {
    background: transparent;
    padding: 0.75rem;
    width: 100%;
    outline: none;
    font-size: 1rem;
    border-radius: 5px;
    background: #2e2e2e;
    box-shadow: 9.91px 9.91px 15px #2a2a2a, -9.91px -9.91px 15px #323232;
    border: none;
    color: #fff;
  }
  textarea {
    min-height: 125px;
    width: 100%;
    resize: vertical;
    height: 125px;
  }
  *::placeholder {
    color: rgb(168, 168, 168);
  }
  input:focus,
  textarea:focus {
    box-shadow: inset 9.91px 9.91px 15px #2a2a2a,
      inset -9.91px -9.91px 15px #323232;
  }

  form button {
    padding: 1rem;
    outline: none;
    border: none;
    border-radius: 5px;
    font-weight: bolder;
    margin-top: 1.2rem;
    font-size: 1rem;
    letter-spacing: 10px;
    box-shadow: 9.91px 9.91px 15px #00000038;
    transition: 0.5s ease-out;
  }
  form button:hover {
    background: #fff06a;
    box-shadow: 5px 5px 10px 0px #fff06a74, -5px -5px 10px 0px #fff06a4a;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
</style>
