pragma ever-solidity >=0.51.0;
import "./Chat.sol";

contract ChatFather {

	function deploy(uint chatId, TvmCell chatCode) public pure returns (address) {
        require(msg.value >= 3e8, 101, "value must be at least 1e9");		
		tvm.accept();
		uint pubkey;
		TvmCell stateInit = tvm.buildStateInit({ 
			code: chatCode,
			varInit: {chatId: chatId},
			contr: Chat,
			pubkey: pubkey
		});
        
		return new Chat{stateInit: stateInit, value: 2e8, wid: 0, flag: 3}();
	}
}
