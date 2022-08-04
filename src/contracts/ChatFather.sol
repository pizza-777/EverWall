pragma ever-solidity >=0.51.0;
import "./Chat.sol";

contract ChatFather {

	function deploy(uint chatId, TvmCell chatCode) public pure returns (address) {		
        require(msg.value >= 1e8, 101, "value must be at least 1e8");		
		tvm.rawReserve(address(this).balance - msg.value, 2);
		tvm.accept();
		uint pubkey;
		TvmCell stateInit = tvm.buildStateInit({ 
			code: chatCode,
			varInit: {chatId: chatId},
			contr: Chat,
			pubkey: pubkey
		});
        
		address a = new Chat{stateInit: stateInit, value: 1e7, wid: 0, flag: 3}();
		//return change
		msg.sender.transfer({ value: 0, bounce: false, flag: 128 });

		//address of new wall
		return a;
	}
}
