<script>
    import './Login.css'
    let username="";
    let password="";
    const onEnter = () => {
        console.log("Hi",username,password)
    }
</script>
<main>
	<div class="container">
		<div class="login">
			<h2>Login</h2>
			<input type="text" placeholder="Username" bind:value={username}>
			<input type="text" placeholder="Password" bind:value={password}>
			<div class="redirect">
				<a href="#" id="link1">Register Instead</a>
				<a href="#" id="link2">Forgot Password</a>
			</div>
			<button class="login-btn" on:click={onEnter}>Login</button>
		</div>
	</div>
</main>
<style>
	
</style>
